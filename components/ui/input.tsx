import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600
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

Input.displayName = "Input";

export { Input };
