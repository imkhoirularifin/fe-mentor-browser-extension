"use client";

import { Extension } from "@/types/extension";
import Image from "next/image";
import Button from "./ui/button";
import Switch from "./ui/switch";

interface ExtensionCardProps {
  extension: Extension;
  onToggleStatus: () => void;
  onRemove: () => void;
}

export default function ExtensionCard({
  extension,
  onToggleStatus,
  onRemove,
}: ExtensionCardProps) {
  const { logo, name, description, isActive } = extension;

  return (
    <div className="rounded-20 bg-neutral-0 flex h-[200px] flex-col justify-between p-250 dark:bg-neutral-800">
      {/* top */}
      <div className="flex flex-row gap-200">
        <Image src={logo} alt={name} width={60} height={60} />

        <div className="flex flex-col gap-100">
          <h3 className="text-preset-2 dark:text-neutral-0 text-neutral-900">
            {name}
          </h3>
          <p className="text-preset-5 text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-row items-center justify-between">
        <Button onClick={onRemove}>Remove</Button>

        <Switch
          state={isActive ? "active" : "inactive"}
          onClick={onToggleStatus}
        />
      </div>
    </div>
  );
}
