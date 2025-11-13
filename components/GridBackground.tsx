import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const GridBackground = ({ children, className }: GridBackgroundProps) => {
  return (
    <div className={cn("relative bg-background", className)}>
      {children}
    </div>
  );
};
