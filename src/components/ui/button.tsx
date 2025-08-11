import { cn } from "@/utils/class";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "rounded-full px-250 pt-100 pb-125 hover:cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-0 border border-neutral-200 shadow-sm hover:bg-neutral-100 active:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-500 dark:border-neutral-600",
      },
      state: {
        idle: "",
        active:
          "bg-red-700 hover:bg-red-800 text-neutral-0 border border-red-700 active:bg-red-900 dark:bg-red-600 dark:hover:bg-red-500 dark:active:bg-red-400 dark:border-red-600",
      },
    },
    defaultVariants: {
      variant: "primary",
      state: "idle",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  state,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, state, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
