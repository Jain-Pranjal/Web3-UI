import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  withTopBorder?: boolean;
  withBottomBorder?: boolean;
}

export const Section = ({ 
  children, 
  className,
  withTopBorder = false,
  withBottomBorder = false 
}: SectionProps) => {
  return (
    <div className={cn(
      "relative" ,
      withTopBorder && "border-t border-border",
      withBottomBorder && "border-b border-border",
      className
    )}>
      {/* Plus signs at left and right borders */}
      {(withTopBorder || withBottomBorder) && (
        <>
          {/* Left plus sign */}
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="10" height="10" viewBox="0 0 10 10">
              <line x1="5" y1="0" x2="5" y2="10" stroke="hsl(var(--border))" strokeWidth="1" />
              <line x1="0" y1="5" x2="10" y2="5" stroke="hsl(var(--border))" strokeWidth="1" />
            </svg>
          </div>
          
          {/* Right plus sign */}
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="10" height="10" viewBox="0 0 10 10">
              <line x1="5" y1="0" x2="5" y2="10" stroke="hsl(var(--border))" strokeWidth="1" />
              <line x1="0" y1="5" x2="10" y2="5" stroke="hsl(var(--border))" strokeWidth="1" />
            </svg>
          </div>
        </>
      )}
      
      {children}
    </div>
  );
};
