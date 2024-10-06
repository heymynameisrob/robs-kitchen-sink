import React from "react";
import { Label } from "~/Label";

type SectionProps = {
  children: React.ReactNode;
  title: string
  variants?: Array<string>
}

export function Section({ children, title, variants }: SectionProps) {
  return (
    <div className="w-full space-y-4 lg:space-y-8">
      <section className="flex flex-col items-center gap-4 p-6 lg:p-[10%] bg-background rounded-lg border-2 border-dotted border-primary">      
        {children}
      </section>
      <div className="w-full flex items-center justify-between gap-4">
        <Label htmlFor="">{title}</Label>
        <div className="flex items-center justify-end gap-1">
          {variants?.map(variant => <small className="!text-sm text-secondary font-medium">{variant}</small>)}
        </div>
      </div>
    </div>
  )
}