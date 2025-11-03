import { Badge } from "@/components/ui/badge";
import { IoStar } from "react-icons/io5";

interface GoogleRatingBadgeProps {
  showFull?: boolean;
  className?: string;
}

export function GoogleRatingBadge({ showFull = false, className = "" }: GoogleRatingBadgeProps) {
  if (showFull) {
    return (
      <a
        href="https://www.google.com/search?q=br+pragas+campinas#mpd=~3083268162326719619/customers/reviews"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border border-[#cfe9d4] bg-white/95 px-4 py-2 shadow-sm transition-all hover:shadow-md hover:scale-105 ${className}`}
      >
        <div className="flex items-center gap-1">
          <IoStar className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <IoStar className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <IoStar className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <IoStar className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <IoStar className="h-5 w-5 text-yellow-500 fill-yellow-500" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sm font-bold text-[#1f4d2b]">5.0</span>
          <span className="text-xs text-[#2d6941]">43 avaliações</span>
        </div>
        <Badge variant="secondary" className="bg-[#4285f4] text-white hover:bg-[#3367d6]">
          Google
        </Badge>
      </a>
    );
  }

  return (
    <a
      href="https://www.google.com/search?q=br+pragas+campinas#mpd=~3083268162326719619/customers/reviews"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full bg-yellow-50 border border-yellow-200 px-3 py-1.5 text-sm font-medium text-yellow-900 transition-all hover:bg-yellow-100 hover:scale-105 ${className}`}
    >
      <IoStar className="h-4 w-4 text-yellow-500 fill-yellow-500" />
      <span className="font-bold">5.0</span>
      <span className="text-xs opacity-75">(43 avaliações)</span>
    </a>
  );
}

