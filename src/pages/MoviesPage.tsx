import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { trendingContent, popularContent, newlyAdded, boldSeriesContent } from "@/data/content";

const allMovies = [...newlyAdded, ...popularContent].filter((c) => !c.episodes);
const withEpisodes = [...trendingContent, ...boldSeriesContent].filter((c) => c.episodes);
const movies = allMovies.length > 0 ? allMovies : [...newlyAdded];

const MoviesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-20 px-4 md:px-12">
      <h1 className="font-display text-4xl md:text-5xl mb-2">Movies</h1>
      <p className="text-muted-foreground font-body text-sm mb-8">Browse our collection of Hindi bold movies and short films</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
    <Footer />
    <MobileBottomNav />
  </div>
);

export default MoviesPage;
