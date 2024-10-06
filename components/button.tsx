import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/utils"

/**
 * Types
 */
export type ButtonVariants = VariantProps<typeof variants>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {
  asChild?: boolean
}

/**
 * Variants
 * - Default: Main use button
 * - Accent: Used for key actions, use sparingly
 * - Primary: For main actions, usually one per section
 * - Ghost: For actions that are not key, or for spacing
 * - Destructive: For scary actions
 */
const variants = cva(
  cn(
    "inline-flex items-center justify-center rounded-md text-sm leading-none tracking-tight font-medium whitespace-nowrap",
    "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    "active:scale-95 active:duration-75 active:ease-out"
  ),
  {
    variants: {
      variant: {
        default: "bg-background text-primary hover:bg-gray-50 data-[state=pressed]:bg-gray-100 data-[state=open]:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200 dark:data-[state=pressed]:bg-gray-300 dark:data-[state=open]:bg-gray-300 shadow-[0px_1px_0px_1px_rgba(255,_255,_255,_0.03)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.10),_0px_1px_3px_0px_rgba(0,_0,_0,_0.06)] dark:shadow-[0px_1px_0px_0px_rgba(255,_255,_255,_0.10)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.25]",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 data-[state=pressed]:bg-red-700 data-[state=open]:bg-red-700 shadow-[0px_1px_0px_1px_rgba(255,_255,_255,_0.03)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.10),_0px_1px_3px_0px_rgba(0,_0,_0,_0.06)] dark:shadow-[0px_1px_0px_0px_rgba(255,_255,_255,_0.10)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.25]",        
        primary:
          "bg-primary text-background hover:bg-primary/80 shadow-[0px_1px_0px_1px_rgba(255,_255,_255,_0.03)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.10),_0px_1px_3px_0px_rgba(0,_0,_0,_0.06)] dark:shadow-[0px_1px_0px_0px_rgba(255,_255,_255,_0.10)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.25]",
        accent:
          "bg-cyan-500 text-white hover:bg-cyan-600 data-[state=pressed]:bg-cyan-700 data-[state=open]:bg-cyan-700 shadow-[0px_1px_0px_1px_rgba(255,_255,_255,_0.03)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.10),_0px_1px_3px_0px_rgba(0,_0,_0,_0.06)] dark:shadow-[0px_1px_0px_0px_rgba(255,_255,_255,_0.10)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.25]",
        ghost: "hover:bg-gray-50 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-2 py-1.5",
        sm: "h-7 rounded-md px-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, variants }
