import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import HeroSlider from "@/components/HeroSlider";
import ContentRow from "@/components/ContentRow";
import AgeVerification from "@/components/AgeVerification";
import Footer from "@/components/Footer";
import {
  trendingContent,
  popularContent,
  newlyAdded,
  recommendedContent,
  topRatedContent,
  boldSeriesContent,
} from "@/data/content";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AgeVerification />
      <Navbar />
      <HeroSlider />
      <div className="-mt-16 relative z-10 space-y-2">
        <ContentRow title="🔥 Trending Now" items={trendingContent} />
        <ContentRow title="Popular Hindi 18+ Series" items={popularContent} />
        <ContentRow title="Newly Added" items={newlyAdded} />
        <ContentRow title="Recommended For You" items={recommendedContent} />
        <ContentRow title="Bold Originals" items={boldSeriesContent} />
        <ContentRow title="⭐ Top Rated" items={topRatedContent} />
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default Index;
