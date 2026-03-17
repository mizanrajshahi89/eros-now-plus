import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Share2, Plus, Star, ThumbsUp, Volume2, VolumeX, Maximize } from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import { useState } from "react";

const VideoPlayer = () => {
  const { currentItem, closePlayer } = usePlayer();
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(true);

  if (!currentItem) return null;

  const episodes = currentItem.episodes
    ? Array.from({ length: currentItem.episodes }, (_, i) => ({
        num: i + 1,
        title: `Episode ${i + 1}`,
        duration: `${18 + Math.floor(Math.random() * 25)}m`,
      }))
    : [];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-sm overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={closePlayer}
          className="fixed top-4 right-4 z-[95] bg-surface hover:bg-surface-hover rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video area */}
        <div className="relative w-full aspect-video max-h-[70vh] bg-black">
          <img
            src={currentItem.thumbnail}
            alt={currentItem.title}
            className="w-full h-full object-cover opacity-60"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />

          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setPlaying(!playing)}
              className="bg-primary/90 hover:bg-primary rounded-full p-5 transition-colors"
            >
              <Play className="w-10 h-10 fill-primary-foreground text-primary-foreground" />
            </button>
          </div>

          {/* Bottom controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-4">
            {/* Progress bar */}
            <div className="flex-1">
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "35%" }} />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1 font-body">
                <span>12:34</span>
                <span>{currentItem.duration}</span>
              </div>
            </div>
            <button onClick={() => setMuted(!muted)} className="text-foreground hover:text-primary transition-colors">
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content details */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <h1 className="font-display text-4xl md:text-5xl mb-2">{currentItem.title}</h1>
              <div className="flex items-center gap-3 text-muted-foreground text-sm font-body mb-4">
                <span className="flex items-center gap-1 text-gold">
                  <Star className="w-4 h-4 fill-current" /> {currentItem.rating}
                </span>
                <span>{currentItem.year}</span>
                <span>{currentItem.duration}</span>
                <span className="px-2 py-0.5 border border-border rounded text-xs">{currentItem.genre}</span>
                {currentItem.isVip && (
                  <span className="bg-gold text-accent-foreground text-xs font-bold px-2 py-0.5 rounded">VIP</span>
                )}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                A captivating story that will keep you on the edge of your seat. Featuring stellar performances
                and gripping narrative, this {currentItem.genre.toLowerCase()} explores the depths of human desire
                and the consequences of forbidden choices. Stream now exclusively on HotStream India.
              </p>

              {/* Action buttons */}
              <div className="flex gap-3 mb-8">
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm transition-colors">
                  <Play className="w-4 h-4 fill-current" /> Play Now
                </button>
                <button className="flex items-center gap-2 bg-surface hover:bg-surface-hover text-foreground px-4 py-3 rounded-md font-body text-sm transition-colors">
                  <Plus className="w-4 h-4" /> Watchlist
                </button>
                <button className="flex items-center gap-2 bg-surface hover:bg-surface-hover text-foreground px-4 py-3 rounded-md font-body text-sm transition-colors">
                  <ThumbsUp className="w-4 h-4" /> Like
                </button>
                <button className="flex items-center gap-2 bg-surface hover:bg-surface-hover text-foreground px-4 py-3 rounded-md font-body text-sm transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
          </div>

          {/* Episode list */}
          {episodes.length > 0 && (
            <div>
              <h2 className="font-display text-2xl mb-4">Episodes ({episodes.length})</h2>
              <div className="space-y-2">
                {episodes.map((ep) => (
                  <div
                    key={ep.num}
                    className="flex items-center gap-4 bg-surface hover:bg-surface-hover rounded-md p-3 cursor-pointer transition-colors group"
                  >
                    <div className="w-10 h-10 bg-muted rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Play className="w-4 h-4 group-hover:fill-primary-foreground group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-sm font-medium">{ep.title}</p>
                      <p className="text-muted-foreground text-xs font-body">{ep.duration}</p>
                    </div>
                    <span className="text-muted-foreground text-xs font-body">E{ep.num}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoPlayer;
