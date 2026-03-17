import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { trendingContent } from "@/data/content";

const TrendingPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-20 px-4 md:px-12">
      <h1 className="font-display text-4xl md:text-5xl mb-2">🔥 Trending Now</h1>
      <p className="text-muted-foreground font-body text-sm mb-8">The hottest content everyone's watching right now</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {trendingContent.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
    <Footer />
    <MobileBottomNav />
  </div>
);

export default TrendingPage;
