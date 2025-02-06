"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { House, Newspaper, Calendar, BadgeInfo, Megaphone, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const navigation = [
    { name: "Home", href: "/", icon: <House className="mr-2" /> },
    { name: "News", href: "/news", icon: <Megaphone className="mr-2" /> },
    { name: "Events", href: "/events", icon: <Calendar className="mr-2" /> },
    { name: "Articles", href: "/articles", icon: <Newspaper className="mr-2" /> },
    { name: "About", href: "/about", icon: <BadgeInfo className="mr-2" /> },
  ];

  const location = usePathname();
  const getNavMenuLinkStyle = (href: string) =>
    `${navigationMenuTriggerStyle()} ${
      location === href
        ? "bg-white text-centriaRed"
        : "!bg-centriaRed text-white hover:!bg-white hover:!text-centriaRed transition"
    }`;

  return (
    <div className="relative flex items-center justify-between px-4 py-2 bg-centriaRed">
      {/* Logo */}
      <Link href="/" className="flex items-center md:block hidden">
        <p className="text-2xl font-bold text-white">Centria Hub</p>
      </Link>

      {/* Desktop Menu */}
      <NavigationMenu className="hidden md:flex space-x-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            {navigation.map((item) => {
              const location = usePathname();
              const isActive = location === item.href;
              return (
                <NavigationMenuLink key={item.name} href={item.href} className={getNavMenuLinkStyle(item.href)}>
                  {item.icon}
                  {item.name}
                </NavigationMenuLink>
              );
            })}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}
      <NavigationMenu className="md:hidden w-full">
        <NavigationMenuList>
          <NavigationMenuItem>
            {/* Humberger */}
            <NavigationMenuTrigger className="bg-centriaRed text-white hover:bg-white hover:text-centriaRed transition">
              <Menu className="" />
            </NavigationMenuTrigger>
            {/* Mobile Menu Content */}
            <NavigationMenuContent className="bg-centriaRed">
              {navigation.map((item) => (
                <NavigationMenuLink
                  key={item.name}
                  href={item.href}
                  className={`${getNavMenuLinkStyle(item.href)} !w-full !rounded-none !justify-start`}
                >
                  {item.icon}
                  {item.name}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
