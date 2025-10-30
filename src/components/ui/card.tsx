import { cn } from "@/lib/utils";
import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded-2xl border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  );
});
Card.displayName = "Card";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  );
});
CardContent.displayName = "CardContent";
