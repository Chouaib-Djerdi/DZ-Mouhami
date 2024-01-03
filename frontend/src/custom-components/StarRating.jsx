import { useState } from "react";
import { Command, CommandItem } from "@/components/ui/command";
import { Star } from "lucide-react";

export function StarRating({ value, onChange }) {
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <Command className="flex-row">
      {[1, 2, 3, 4, 5].map((star) => (
        <CommandItem
          key={star}
          onSelect={() => onChange(star)}
          className={
            star <= (hoverValue || value) ? "text-primary" : "text-gray-400"
          }
          onMouseEnter={() => setHoverValue(star)}
          onMouseLeave={() => setHoverValue(0)}
        >
          <Star />
        </CommandItem>
      ))}
    </Command>
  );
}
