import React from "react";
import { Checkbox as CheckboxPrimitive } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { cn } from "./utils";

/**
  Types - Optional id to link with Label htmlFor
*/
type CheckboxPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive
> & {
  id?: string;
};

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive>,
  CheckboxPrimitiveProps
>(({ id, ...props }, ref) => (
  <CheckboxPrimitive
    {...props}
    ref={ref}
    id={id}
    className={cn(
      "group block w-4 h-4 rounded bg-background border border-primary data-[checked]:bg-primary data-[checked]:text-background shadow-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      props.className,
    )}
  >
    <CheckIcon className="w-[14px] h-[14px] opacity-0 group-data-[checked]:opacity-100" />
  </CheckboxPrimitive>
));
