import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";

export interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  genre: string;
  year: number;
  duration: string;
  rating: number;
  episodes?: number;
  isVip?: boolean;
  isNew?: boolean;
  description?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  genre: string;
  year: number;
  rating: number;
}

const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];

export const heroSlides: HeroSlide[] = [
  {
    id: "h1",
    title: "Forbidden Desires",
    subtitle: "A HotStream Original",
    description: "When secrets unravel in a small town, nothing remains hidden. A passionate tale of love, betrayal, and redemption.",
    image: hero1,
    genre: "Romantic Drama",
    year: 2026,
    rating: 8.4,
  },
  {
    id: "h2",
    title: "Midnight Whispers",
    subtitle: "Season 2 Now Streaming",
    description: "Two strangers meet in the city of dreams. Their chemistry is undeniable, but the past won't let them be together.",
    image: hero2,
    genre: "Romance",
    year: 2026,
    rating: 8.7,
  },
  {
    id: "h3",
    title: "Dark Obsession",
    subtitle: "New Episodes Every Friday",
    description: "A psychological thriller that explores the darkest corners of obsession. How far will he go to protect his secrets?",
    image: hero3,
    genre: "Thriller",
    year: 2025,
    rating: 9.1,
  },
];

const titles = [
  "Charmsukh", "Riti Riwaj", "Palang Tod", "Kavita Bhabhi", "Jane Anjane Mein",
  "Aashram", "Gandii Baat", "Mastram", "Bekaboo", "Ragini MMS Returns",
  "Bull of Dalal Street", "Broken But Beautiful", "Puncch Beat", "Who's Your Daddy",
  "Fixer", "The Chargesheet", "Apharan", "Hai Taubba", "Woodpecker",
  "Khidki", "Lovely Massage Parlour", "Jabran", "Siskiyaan", "Bharti Ka Show",
];

const genres = ["Romantic Drama", "Thriller", "Mystery", "Short Film", "Bold Series", "Romance"];

function makeContent(startIdx: number, count: number, vipChance = 0.3): ContentItem[] {
  return Array.from({ length: count }, (_, i) => {
    const idx = (startIdx + i) % titles.length;
    return {
      id: `c-${startIdx}-${i}`,
      title: titles[idx],
      thumbnail: thumbnails[(startIdx + i) % thumbnails.length],
      genre: genres[(startIdx + i) % genres.length],
      year: 2024 + Math.floor(Math.random() * 3),
      duration: `${20 + Math.floor(Math.random() * 30)}m`,
      rating: +(7 + Math.random() * 2.5).toFixed(1),
      episodes: Math.random() > 0.4 ? 3 + Math.floor(Math.random() * 10) : undefined,
      isVip: Math.random() < vipChance,
      isNew: Math.random() < 0.3,
    };
  });
}

export const trendingContent = makeContent(0, 10);
export const popularContent = makeContent(5, 10, 0.5);
export const newlyAdded = makeContent(10, 10, 0.2);
export const recommendedContent = makeContent(15, 10);
export const topRatedContent = makeContent(20, 10, 0.4);
export const boldSeriesContent = makeContent(2, 10, 0.6);
