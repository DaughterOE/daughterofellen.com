import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Sun, Moon, ChevronDown } from "lucide-react";
import logo from "@/assets/doe-logo.png";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { navigation } from "@/lib/institutionalContent";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("doe-theme") === "dark");
  const location = useLocation();
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); localStorage.setItem("doe-theme", dark ? "dark" : "light"); }, [dark]);
  useEffect(() => { setMobileOpen(false); }, [location.pathname, location.hash]);
  return <>
    <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-32 rounded-md bg-background p-3 text-foreground focus:translate-y-0">Skip to content</a>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" aria-label="Daughter of Ellen home"><img src={logo} alt="Daughter of Ellen" className="h-14 w-auto dark:brightness-0 dark:invert" /></Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigation.map(menu => <DropdownMenu key={menu.label}>
            <DropdownMenuTrigger asChild><Button variant="ghost" className={location.pathname === menu.path ? "text-primary" : "text-foreground"}>{menu.label}<ChevronDown aria-hidden="true" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="max-h-[70vh] max-w-[90vw] overflow-y-auto p-2">
              {menu.links.map(item => <DropdownMenuItem asChild key={item.path}><Link to={item.path} className="min-h-11 whitespace-normal">{item.label}</Link></DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Light theme" : "Dark theme"}>{dark ? <Sun /> : <Moon />}</Button>
          <Button asChild className="hidden sm:inline-flex"><Link to="/get-support">Get Support</Link></Button>
          <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
            <DialogTrigger asChild><Button className="lg:hidden" variant="ghost" size="icon" aria-label="Open menu"><Menu /></Button></DialogTrigger>
            <DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto">
              <DialogTitle>Menu</DialogTitle><DialogDescription className="sr-only">Daughter of Ellen navigation</DialogDescription>
              <div className="flex flex-wrap gap-3"><DialogClose asChild><Button asChild><Link to="/get-support">Get Support</Link></Button></DialogClose><DialogClose asChild><Button asChild variant="outline"><Link to="/partner">Partner With Us</Link></Button></DialogClose></div>
              <nav aria-label="Mobile navigation">{navigation.map(menu => <details key={menu.label} className="border-b border-border py-3"><summary className="cursor-pointer py-1 font-semibold">{menu.label}</summary><div className="flex flex-col py-2">{menu.links.map(item => <DialogClose asChild key={item.path}><Button asChild variant="ghost" className="min-h-11 justify-start whitespace-normal text-left"><Link to={item.path}>{item.label}</Link></Button></DialogClose>)}</div></details>)}</nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  </>;
};
export default Navbar;
