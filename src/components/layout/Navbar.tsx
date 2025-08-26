import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Reservations", href: "/reservations" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100" 
            : "bg-white shadow-sm"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Enhanced Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105"
              aria-label="DineHub - Go to homepage"
            >
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-700 transition-colors duration-200">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 32 32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V24C24 25.1046 23.1046 26 22 26H10C8.89543 26 8 25.1046 8 24V12Z" fill="currentColor"/>
                  <path d="M12 14V22M16 14V22M20 14V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 8L16 6L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="18" r="2" fill="white"/>
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                DineHub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    location.pathname === item.href
                      ? "text-amber-600 bg-amber-50"
                      : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                  }`}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full" />
                  )}
                </Link>
              ))}
              
              {/* Search Button */}
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* User Account Button */}
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                aria-label="User account"
              >
                <User className="h-5 w-5" />
              </Button>

              {/* Enhanced CTA Button */}
              <Button 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 ml-2"
                asChild
              >
                <Link to="/reservations">Book Table</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                      isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                      isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                    }`} 
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div 
            id="mobile-menu"
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isOpen 
                ? "max-h-96 opacity-100" 
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-amber-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? "text-amber-600 bg-amber-50 border-l-4 border-amber-600"
                      : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 py-3 pt-4 border-t border-amber-100">
                <Button 
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg transition-all duration-200"
                  asChild
                >
                  <Link to="/reservations">Book Table</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;