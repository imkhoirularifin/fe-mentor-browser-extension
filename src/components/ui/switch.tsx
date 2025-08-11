import { cn } from "@/utils/class";
import { cva, VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out hover:cursor-pointer",
  {
    variants: {
      state: {
        active:
          "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400",
        inactive:
          "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",
      },
    },
    defaultVariants: {
      state: "inactive",
    },
  },
);

const switchThumbVariants = cva(
  "inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out",
  {
    variants: {
      state: {
        active: "translate-x-6",
        inactive: "translate-x-1",
      },
    },
    defaultVariants: {
      state: "inactive",
    },
  },
);

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange">,
    VariantProps<typeof switchVariants> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Switch({
  className,
  state,
  checked,
  onChange,
  disabled,
  ...props
}: SwitchProps) {
  const isActive = checked ?? state === "active";

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!isActive);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isActive}
      disabled={disabled}
      className={cn(
        switchVariants({
          state: isActive ? "active" : "inactive",
          className,
        }),
        disabled && "cursor-not-allowed opacity-50",
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="sr-only">Toggle switch</span>
      <span
        className={cn(
          switchThumbVariants({
            state: isActive ? "active" : "inactive",
          }),
        )}
      />
    </button>
  );
}
