"use client";

import Image from "next/image";
import ExtensionCard from "@/components/extension-card";
import React, { useEffect, useState } from "react";
import data from "./data.json";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/utils/filter";
import ThemeSwitcher from "@/components/theme-switcher";
import { Extension } from "@/types/extension";
import Button from "@/components/ui/button";

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("filter") || "all";

  const [filter, setFilter] = useState<string>(query);
  const [extensions, setExtensions] = useState<Extension[]>(data);

  // Set the filter in the URL
  useEffect(() => {
    if (!!filter) {
      const newUrl = formUrlQuery({
        key: "filter",
        value: filter,
        searchParams: searchParams.toString(),
        pathName: pathname,
      });
      router.push(newUrl);
    }
  }, [filter, pathname, router, searchParams]);

  const handleFilterClick = (filterValue: string) => {
    setFilter(filterValue);
  };

  // Handle toggle extension status
  const handleToggleStatus = (index: number) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension, i) =>
        i === index
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  };

  // Handle remove extension
  const handleRemove = (index: number) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((_, i) => i !== index),
    );
  };

  // Filter extensions based on filter value
  const filteredExtensions =
    filter === "all"
      ? extensions
      : extensions.filter((extension) =>
          filter === "active" ? extension.isActive : !extension.isActive,
        );

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto mt-250 px-200 md:px-400 xl:px-800">
        <header className="bg-neutral-0 rounded-20 mx-auto mt-500 flex max-w-6xl flex-row items-center justify-between border border-neutral-200 px-200 py-150 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-none">
          {/* logo */}
          <div
            className="flex flex-row items-center gap-150 text-2xl font-semibold tracking-tight hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="/images/logo.svg"
              alt="Browser Extension Manager"
              width={40}
              height={40}
              priority
            />
            <span className="font-geologica text-neutral-900 dark:text-neutral-100">
              Extensions
            </span>
          </div>

          <ThemeSwitcher />
        </header>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-500 mb-800 flex flex-col items-center px-200 md:px-400 xl:px-800">
        <div className="flex flex-col items-center gap-300">
          <h1 className="text-preset-1">Extensions List</h1>
          <div className="flex flex-row gap-150">
            <Button
              variant={"primary"}
              state={filter === "all" ? "active" : "idle"}
              onClick={() => handleFilterClick("all")}
            >
              All
            </Button>
            <Button
              variant={"primary"}
              state={filter === "active" ? "active" : "idle"}
              onClick={() => handleFilterClick("active")}
            >
              Active
            </Button>
            <Button
              variant={"primary"}
              state={filter === "inactive" ? "active" : "idle"}
              onClick={() => handleFilterClick("inactive")}
            >
              Inactive
            </Button>
          </div>
        </div>

        {/* Extensions Grid */}
        <div className="mt-400 flex max-w-6xl flex-col gap-150 md:grid md:grid-cols-2 xl:grid-cols-3">
          {filteredExtensions.map((extension) => {
            // Find the original index in the full extensions array
            const originalIndex = extensions.findIndex(
              (ext) =>
                ext.name === extension.name &&
                ext.description === extension.description,
            );

            return (
              <ExtensionCard
                key={originalIndex}
                extension={extension}
                onToggleStatus={() => handleToggleStatus(originalIndex)}
                onRemove={() => handleRemove(originalIndex)}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
