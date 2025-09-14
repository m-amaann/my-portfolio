import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex min-h-[80px] w-full rounded-md border border-gray-300 dark:border-gray-600
           bg-background px-3 py-2 text-sm placeholder:text-muted-foreground
           focus:outline-none focus:ring-0 focus:border-cmaccent dark:focus:border-cmaccent
           disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
