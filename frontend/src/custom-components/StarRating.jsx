import { useState } from "react";
import { Command, CommandItem } from "@/components/ui/command";
import { FaStar } from "react-icons/fa6";

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
          <FaStar size={24} />
        </CommandItem>
      ))}
    </Command>
  );
}
