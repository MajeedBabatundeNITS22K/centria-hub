"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { House, Newspaper, Calendar, BadgeInfo, Megaphone, User, Menu } from 'lucide-react';

const NavBar = () => {
  const navigation = [
    { name: "Home", href: "/", icon: <House className="mr-2" /> },
    { name: "News", href: "/news", icon: <Megaphone className="mr-2" /> },
    { name: "Events", href: "/events", icon: <Calendar className="mr-2" /> },
    { name: "Articles", href: "/articles", icon: <Newspaper className="mr-2" /> },
    { name: "About", href: "/about", icon: <BadgeInfo className="mr-2" /> },
    { name: "Login", href: "/", icon: <User className="mr-2" /> }, // Need to change path
  ];
  
  return (
    <div className='relative flex items-center justify-between px-4 py-2 bg-centriaRed'>
      {/* Logo */}
      <div className='flex items-center md:block hidden'>
        <p className='text-2xl font-bold text-white'>Centria Hub</p>
      </div>

      {/* Desktop Menu */}
      <NavigationMenu className='hidden md:flex space-x-4'>
        <NavigationMenuList>
          <NavigationMenuItem>
            {navigation.map((item) => (
              <NavigationMenuLink 
                key={item.name} 
                href={item.href} 
                className={`${navigationMenuTriggerStyle()} !bg-centriaRed text-white hover:!bg-white hover:!text-centriaRed transition`}
              >
                {item.icon}
                {item.name}
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}
      <NavigationMenu className="md:hidden w-full">
        <NavigationMenuList>
          <NavigationMenuItem>
            {/* Humberger */}
            <NavigationMenuTrigger className="bg-centriaRed text-white hover:bg-white hover:text-centriaRed transition">
              <Menu className=""/>
            </NavigationMenuTrigger>
            {/* Mobile Menu Content */}
            <NavigationMenuContent className="bg-centriaRed">
              {navigation.map((item) => (
                <NavigationMenuLink 
                  key={item.name} 
                  href={item.href} 
                  className={`${navigationMenuTriggerStyle()} !bg-centriaRed text-white hover:!bg-white hover:!text-centriaRed transition !w-full`}
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
