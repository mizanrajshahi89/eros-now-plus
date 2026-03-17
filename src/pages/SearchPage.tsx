import { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { Search } from "lucide-react";
import { trendingContent, popularContent, newlyAdded, boldSeriesContent, topRatedContent, recommendedContent } from "@/data/content";

const allContent = [...trendingContent, ...popularContent, ...newlyAdded, ...boldSeriesContent, ...topRatedContent, ...recommendedContent];
const seen = new Set<string>();
const unique = allContent.filter((c) => {
  if (seen.has(c.id)) return false;
  seen.add(c.id);
  return true;
});

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const results = query.trim()
    ? unique.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()) || c.genre.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4 md:px-12">
        <h1 className="font-display text-4xl md:text-5xl mb-6">Search</h1>
        <div className="flex items-center bg-surface border border-border rounded-lg px-4 py-3 max-w-xl mb-8">
          <Search className="w-5 h-5 text-muted-foreground mr-3" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies, series, genres..."
            className="bg-transparent flex-1 outline-none font-body text-sm"
          />
        </div>
        {query.trim() ? (
          results.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {results.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground font-body text-center py-12">No results for "{query}"</p>
          )
        ) : (
          <div>
            <h2 className="font-display text-2xl mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {["Charmsukh", "Thriller", "Romantic Drama", "Bold Series", "Palang Tod", "Mystery"].map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="bg-surface hover:bg-surface-hover text-muted-foreground px-4 py-2 rounded-full font-body text-sm transition-colors"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default SearchPage;
