import { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { trendingContent, popularContent, newlyAdded, boldSeriesContent, topRatedContent, recommendedContent } from "@/data/content";

const categories = [
  { label: "All", value: "all" },
  { label: "Romantic Drama", value: "Romantic Drama" },
  { label: "Thriller", value: "Thriller" },
  { label: "Mystery", value: "Mystery" },
  { label: "Short Film", value: "Short Film" },
  { label: "Bold Series", value: "Bold Series" },
  { label: "Romance", value: "Romance" },
];

const allContent = [...trendingContent, ...popularContent, ...newlyAdded, ...boldSeriesContent, ...topRatedContent, ...recommendedContent];
const seen = new Set<string>();
const unique = allContent.filter((c) => {
  if (seen.has(c.id)) return false;
  seen.add(c.id);
  return true;
});

const CategoriesPage = () => {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? unique : unique.filter((c) => c.genre === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4 md:px-12">
        <h1 className="font-display text-4xl md:text-5xl mb-2">Categories</h1>
        <p className="text-muted-foreground font-body text-sm mb-6">Explore content by genre</p>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`px-4 py-2 rounded-full font-body text-sm transition-colors ${
                active === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface hover:bg-surface-hover text-muted-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-muted-foreground font-body text-center py-12">No content found in this category.</p>
        )}
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default CategoriesPage;
