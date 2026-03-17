import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, Crown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Movies", to: "/movies" },
    { label: "Web Series", to: "/web-series" },
    { label: "Trending", to: "/trending" },
    { label: "Categories", to: "/categories" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background via-background/80 to-transparent">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="font-display text-3xl md:text-4xl text-primary">HOT</span>
          <span className="font-display text-3xl md:text-4xl">STREAM</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {searchOpen ? (
            <div className="flex items-center bg-surface border border-border rounded-md px-3 py-1.5">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <input
                autoFocus
                placeholder="Search..."
                className="bg-transparent text-sm outline-none w-32 md:w-48 font-body"
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          ) : (
            <button onClick={() => setSearchOpen(true)} className="p-2 hover:bg-surface rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
          )}

          <Link
            to="/vip"
            className="hidden md:flex items-center gap-1.5 bg-gold text-accent-foreground px-4 py-2 rounded-md font-body text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Crown className="w-4 h-4" /> VIP
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-surface rounded-full transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-sm text-muted-foreground hover:text-foreground py-2"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/vip"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-1.5 bg-gold text-accent-foreground px-4 py-2 rounded-md font-body text-sm font-semibold w-fit"
          >
            <Crown className="w-4 h-4" /> Go VIP
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
