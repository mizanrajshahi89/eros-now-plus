import { Send } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-12 pb-20 md:pb-8">
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <span className="font-display text-2xl">
            <span className="text-primary">HOT</span>STREAM
          </span>
          <p className="text-muted-foreground text-xs font-body mt-3 leading-relaxed">
            India's premium streaming destination for bold Hindi web series and movies.
          </p>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm mb-3">Browse</h4>
          <ul className="space-y-2 text-muted-foreground text-xs font-body">
            <li className="hover:text-foreground cursor-pointer transition-colors">Movies</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Web Series</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Trending</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Categories</li>
          </ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm mb-3">Support</h4>
          <ul className="space-y-2 text-muted-foreground text-xs font-body">
            <li className="hover:text-foreground cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm mb-3">Join Telegram</h4>
          <p className="text-muted-foreground text-xs font-body mb-3">Get updates on new releases</p>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-body text-xs font-semibold transition-colors">
            <Send className="w-3 h-3" /> Join Now
          </button>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-xs font-body">
        © 2026 HotStream India. All rights reserved. For adults 18+ only.
      </div>
    </div>
  </footer>
);

export default Footer;
