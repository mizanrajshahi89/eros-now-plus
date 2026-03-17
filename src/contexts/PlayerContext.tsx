import { createContext, useContext, useState, ReactNode } from "react";
import type { ContentItem } from "@/data/content";

interface PlayerContextType {
  currentItem: ContentItem | null;
  openPlayer: (item: ContentItem) => void;
  closePlayer: () => void;
}

const PlayerContext = createContext<PlayerContextType>({
  currentItem: null,
  openPlayer: () => {},
  closePlayer: () => {},
});

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentItem, setCurrentItem] = useState<ContentItem | null>(null);

  const openPlayer = (item: ContentItem) => setCurrentItem(item);
  const closePlayer = () => setCurrentItem(null);

  return (
    <PlayerContext.Provider value={{ currentItem, openPlayer, closePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
