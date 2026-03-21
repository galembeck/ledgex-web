import { Link, type LinkProps } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

const logoVariants = cva(
  "flex items-center gap-2 transition-opacity hover:opacity-90",
  {
    variants: {
      size: {
        sm: "gap-1.5",
        md: "gap-2",
        lg: "gap-3",
        xl: "gap-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const iconContainerVariants = cva(
  "flex items-center justify-center rounded-lg bg-primary-purple",
  {
    variants: {
      size: {
        sm: "h-7 w-7",
        md: "h-9 w-9",
        lg: "h-11 w-11",
        xl: "h-14 w-14",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const iconVariants = cva("text-white", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const textVariants = cva(
  "font-semibold text-black leading-none dark:text-white",
  {
    variants: {
      size: {
        sm: "text-base",
        md: "text-xl",
        lg: "text-2xl",
        xl: "text-4xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface LogoProps extends LinkProps, VariantProps<typeof logoVariants> {
  className?: string;
  hideText?: boolean;
}

function Logo({ size, className, hideText = false, ...props }: LogoProps) {
  return (
    <Link className={cn(logoVariants({ size }), className)} {...props} to="/">
      <div className={cn(iconContainerVariants({ size }))}>
        <LineChart className={cn(iconVariants({ size }))} />
      </div>

      {!hideText && (
        <span className={cn(textVariants({ size }), className)}>LedgeX</span>
      )}
    </Link>
  );
}

export { Logo };
