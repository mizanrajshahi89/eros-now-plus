import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PlayerProvider } from "@/contexts/PlayerContext";
import VideoPlayer from "@/components/VideoPlayer";
import Index from "./pages/Index.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import WebSeriesPage from "./pages/WebSeriesPage.tsx";
import TrendingPage from "./pages/TrendingPage.tsx";
import CategoriesPage from "./pages/CategoriesPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PlayerProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/web-series" element={<WebSeriesPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <VideoPlayer />
        </BrowserRouter>
      </PlayerProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
