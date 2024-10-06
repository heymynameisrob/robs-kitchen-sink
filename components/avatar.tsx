import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "./utils";

/**
 * Types
 */
type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  initials: `${string}${string}${string}`; // Max 3 characters
  src?: string;
  size?: "sm" | "md" | "lg";
};

/**
 * getBackgroundFromInitials - If fallback is displayed, pick a random background color based on the last initial
 * @param initials 
 * @returns 
 */
const getBackgroundFromInitials = (initials: string) => {
  const colors = ["bg-red-200 text-red-900", "bg-green-200 text-green-900", "bg-blue-200 text-blue-900", "bg-yellow-200 text-yellow-900", "bg-purple-200 text-purple-900", "bg-pink-200 text-pink-900"];
  const lastChar = initials.charAt(initials.length - 1).toLowerCase();
  const charCode = lastChar.charCodeAt(0);
  return colors[charCode % colors.length];
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size = "sm", src, initials, ...props }, ref) => (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background", 
        size === "sm" && "h-7 w-7",
        size === "md" && "h-9 w-9",
        size === "lg" && "h-11 w-11",
        className
      )}
      ref={ref}
      {...props}
    >
      {src && (
        <AvatarPrimitive.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src={src}
          alt={initials}
        />
      )}
      <AvatarPrimitive.Fallback
        className={cn("text-sm font-medium uppercase flex h-full w-full items-center justify-center rounded-full", getBackgroundFromInitials(initials))}
        delayMs={600}
      >
        {initials}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
)

Avatar.displayName = "Avatar"

export { Avatar }