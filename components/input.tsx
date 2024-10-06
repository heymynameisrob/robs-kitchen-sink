import * as React from "react"

import { cn } from "./utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md bg-background px-3 py-2 text-sm text-primary border border-primary shadow-sm",          
          "placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",          
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          className
        )}
        ref={ref}
        {...props}
        id={id}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
