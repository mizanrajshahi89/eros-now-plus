import { Link, useLocation } from "react-router-dom";
import { Home, Search, Tv, User } from "lucide-react";

const MobileBottomNav = () => {
  const location = useLocation();

  const tabs = [
    { icon: Home, label: "Home", to: "/" },
    { icon: Search, label: "Search", to: "/search" },
    { icon: Tv, label: "Series", to: "/web-series" },
    { icon: User, label: "Profile", to: "/profile" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex justify-around py-2">
        {tabs.map((tab) => {
          const active = location.pathname === tab.to;
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-[10px] font-body">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
