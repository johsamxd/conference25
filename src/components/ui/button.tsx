import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex cursor-pointer gap-1 items-center justify-center whitespace-nowrap leading-none rounded-md ring-offset-background-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none duration-200 disabled:text-text-secondary disabled:bg-element-primary",
  {
    variants: {
      variant: {
        default:
          "border-2 bg-white  border-text-primary text-main-primary rounded-md hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        icon: "text-text-primary hover:text-text-primary",
        link: "text-text-primary rounded-none border-b-2 border-transparent hover:border-background-secondary",
      },
      size: {
        default: "typo-small-title  px-6 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "typo-sub-title h-10 px-6 has-[>svg]:px-4",
        icon: "p-0 m-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  loading,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      disabled={loading}
      className={cn(
        buttonVariants({ variant, size, className }),
        "group/icon",
        loading && "cursor-default"
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        props.children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
