import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Info, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/content";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-16 md:bottom-24 left-4 md:left-12 z-10 max-w-xl">
        <motion.div
          key={slide.id + "-text"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-2">
            {slide.subtitle}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-4 text-shadow-hero">
            {slide.title}
          </h1>
          <div className="flex items-center gap-3 mb-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-1 text-gold">
              <Star className="w-4 h-4 fill-current" /> {slide.rating}
            </span>
            <span>{slide.year}</span>
            <span className="px-2 py-0.5 border border-border rounded text-xs">{slide.genre}</span>
          </div>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
            {slide.description}
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm transition-colors">
              <Play className="w-5 h-5 fill-current" /> Watch Now
            </button>
            <button className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm transition-colors">
              <Info className="w-5 h-5" /> More Info
            </button>
          </div>
        </motion.div>
      </div>

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/50 hover:bg-background/80 rounded-full transition-colors">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/50 hover:bg-background/80 rounded-full transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
