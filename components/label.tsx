import * as React from 'react';
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "./utils";

/**
 * Label
 * - Deliberately require htmlFor so user can click the label to focus the input
 */

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    htmlFor: string
  }
>(({ className, htmlFor, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref} 
    className={cn(
      "text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
    htmlFor={htmlFor}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };