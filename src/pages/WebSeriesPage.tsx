import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { trendingContent, popularContent, boldSeriesContent, topRatedContent } from "@/data/content";

const allSeries = [...trendingContent, ...popularContent, ...boldSeriesContent, ...topRatedContent];
// Deduplicate by id
const seen = new Set<string>();
const series = allSeries.filter((c) => {
  if (seen.has(c.id)) return false;
  seen.add(c.id);
  return true;
});

const WebSeriesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-20 px-4 md:px-12">
      <h1 className="font-display text-4xl md:text-5xl mb-2">Web Series</h1>
      <p className="text-muted-foreground font-body text-sm mb-8">Binge-worthy Hindi 18+ web series — originals, bold dramas & more</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {series.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
    <Footer />
    <MobileBottomNav />
  </div>
);

export default WebSeriesPage;
