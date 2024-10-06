import React, { useState } from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

import { cn } from "~/utils";

/**
 * Types
 */
export type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>


/**
 * Collapsible
 * - Use id to store state in local storage so user can save their preference. Good for sidebar menus etc.
 * - NB. Make sure to handle SSR (e.g Next JS) properly because they hate stuff like local storage
 */
export const Collapsible = React.forwardRef<React.ElementRef<typeof CollapsiblePrimitive.Root>, CollapsibleProps>(({ children, ...props }, ref) => {

  const [open, setOpen] = useState(JSON.parse(localStorage.getItem(`collapsible-${props.id}`) || "false"))

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if(props.id) {
      localStorage.setItem(`collapsible-${props.id}`, JSON.stringify(open))
    }
  }

  return (
    <CollapsiblePrimitive.Root {...props} ref={ref} id={props.id} open={open} onOpenChange={handleOpenChange}>
      {children}
    </CollapsiblePrimitive.Root>
  )
})


export const CollapsibleTrigger = React.forwardRef<React.ElementRef<typeof CollapsiblePrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>>(({ children, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger {...props} ref={ref} className="group inline-flex items-center justify-center px-1.5 py-1 h-7 rounded-md bg-transparent text-sm font-semibold text-secondary hover:bg-gray-50">
    {children}
    <ChevronRightIcon className={cn("w-4 h-4 rotate-0 duration-75 ease-linear group-data-[state=open]:rotate-90")} />
  </CollapsiblePrimitive.Trigger>
))

export const CollapsibleContent = React.forwardRef<React.ElementRef<typeof CollapsiblePrimitive.Content>, React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>>(({ children, ...props }, ref) => (
  <CollapsiblePrimitive.Content {...props} ref={ref}>
    {children}
  </CollapsiblePrimitive.Content>
))

Collapsible.displayName = "Collapsible"
CollapsibleTrigger.displayName = "CollapsibleTrigger"
CollapsibleContent.displayName = "CollapsibleContent"
