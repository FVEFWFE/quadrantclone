import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "FUNDS & INVESTMENTS", href: "/funds-investments" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <h1 className="text-xl font-light tracking-[0.2em] uppercase text-white">
              QUADRANT
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="text-xs font-light tracking-[0.15em] text-white/80 hover:text-white transition-colors cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                data-testid="button-menu-toggle"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-black border-white/10">
              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span
                      onClick={() => setIsOpen(false)}
                      className="block text-sm font-light tracking-[0.15em] text-white/80 hover:text-white py-2 cursor-pointer"
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
