import React from 'react';
import { TabGroup as TabGroupPrimitive, TabList as TabListPrimitive, TabPanels as TabPanelsPrimitive, TabPanel as TabPanelPrimitive, Tab as TabPrimitive } from '@headlessui/react';
import { cn } from '~/utils';

export type TabsProps = React.ComponentPropsWithoutRef<typeof TabGroupPrimitive>

export const Tabs = React.forwardRef<React.ElementRef<typeof TabGroupPrimitive>, TabsProps>(({ children, ...props }, ref) => {
  return (
    <TabGroupPrimitive {...props} ref={ref}>
      {children}
    </TabGroupPrimitive>
  )
})

export const TabList = React.forwardRef<
  React.ElementRef<typeof TabListPrimitive>,
  React.ComponentPropsWithoutRef<typeof TabListPrimitive>
>(({ children, ...props }, ref) => {
  return (
    <TabListPrimitive {...props} ref={ref} className="flex items-center gap-2">
      {children}
    </TabListPrimitive>
  )
})

export const Tab = React.forwardRef<
  React.ElementRef<typeof TabPrimitive>,
  React.ComponentPropsWithoutRef<typeof TabPrimitive>
>(({ children, ...props }, ref) => {
  return (
    <TabPrimitive 
    {...props} 
    className={cn(
      "inline-flex items-center gap-1.5 text-sm px-1.5 py-1 h-7 rounded-md bg-transparent data-[selected]:bg-gray-100 data-[selected]:text-primary font-medium text-secondary hover:text-primary [&_svg]:opacity-80",
      "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
      props.className
    )}
    ref={ref}>
      {children}
    </TabPrimitive>
  )
})

export const TabPanels = React.forwardRef<
  React.ElementRef<typeof TabPanelsPrimitive>,
  React.ComponentPropsWithoutRef<typeof TabPanelsPrimitive>
>(({ children, ...props }, ref) => {
  return (
    <TabPanelsPrimitive {...props} ref={ref}>
      {children}
    </TabPanelsPrimitive>
  )
})

export const TabPanel = React.forwardRef<
  React.ElementRef<typeof TabPanelPrimitive>,
  React.ComponentPropsWithoutRef<typeof TabPanelPrimitive>
>(({ children, ...props }, ref) => {
  return (
    <TabPanelPrimitive {...props} ref={ref} className="rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none">
      {children}
    </TabPanelPrimitive>
  )
})

