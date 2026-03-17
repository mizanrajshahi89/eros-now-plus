import { useState } from "react";
import { Play, Star } from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import type { ContentItem } from "@/data/content";

const ContentCard = ({ item }: { item: ContentItem }) => {
  const [hovered, setHovered] = useState(false);
  const { openPlayer } = usePlayer();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => openPlayer(item)}
      className="flex-shrink-0 w-[160px] md:w-[220px] lg:w-[260px] cursor-pointer group/card"
    >
      <div className="relative aspect-video rounded-md overflow-hidden bg-surface transition-transform duration-200 group-hover/card:scale-105">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 gradient-card-overlay opacity-0 group-hover/card:opacity-100 transition-opacity" />

        {item.isVip && (
          <span className="absolute top-2 left-2 bg-gold text-accent-foreground text-[10px] font-body font-bold px-2 py-0.5 rounded">
            VIP
          </span>
        )}
        {item.isNew && (
          <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] font-body font-bold px-2 py-0.5 rounded">
            NEW
          </span>
        )}

        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/90 rounded-full p-3">
              <Play className="w-5 h-5 fill-primary-foreground text-primary-foreground" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 px-1">
        <h3 className="font-body text-sm font-medium truncate">{item.title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground text-xs mt-1">
          <span className="flex items-center gap-0.5 text-gold">
            <Star className="w-3 h-3 fill-current" /> {item.rating}
          </span>
          <span>{item.year}</span>
          <span>{item.duration}</span>
          {item.episodes && <span>{item.episodes} Ep</span>}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
