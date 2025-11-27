import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DocNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const DocNavigation = ({ onPrevious, onNext, hasPrevious, hasNext }: DocNavigationProps) => {
  return (
    <div className="mt-12 pt-8 border-t border-border flex justify-between">
      <Button
        variant="outline"
        className="border-border hover:bg-secondary"
        onClick={onPrevious}
        disabled={!hasPrevious}
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>
      <Button
        variant="outline"
        className="border-border hover:bg-secondary"
        onClick={onNext}
        disabled={!hasNext}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
