import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./utils"

const variants = cva(  
  cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap [&_svg]:opacity-80",    
    "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent text-secondary hover:bg-gray-50 data-[state=on]:bg-gray-200 data-[state=on]:text-primary",
        outline:
          "border border-secondary bg-transparent hover:bg-gray-200 hover:text-accent-foreground dark:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-primary",
      },
      size: {
        default: "h-9 px-2",
        sm: "h-7 px-2",
        lg: "h-11 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof variants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(variants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, variants }
