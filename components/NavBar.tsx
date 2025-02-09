'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
	BadgeInfo,
	Calendar,
	House,
	Megaphone,
	Menu,
	Newspaper,
} from 'lucide-react'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const NavBar = () => {
	const navigation = [
		{ name: 'Home', href: '/', icon: <House className='mr-2' /> },
		{ name: 'News', href: '/news', icon: <Megaphone className='mr-2' /> },
		{ name: 'Events', href: '/events', icon: <Calendar className='mr-2' /> },
		{
			name: 'Articles',
			href: '/articles',
			icon: <Newspaper className='mr-2' />,
		},
		{ name: 'About', href: '/about', icon: <BadgeInfo className='mr-2' /> },
	]

	const location = usePathname()
	const getNavMenuLinkStyle = (href: string) =>
		`${navigationMenuTriggerStyle()} ${
			location === href
				? 'bg-white text-centriaRed'
				: '!bg-centriaRed text-white hover:!bg-white hover:!text-centriaRed transition'
		}`

	return (
		<div className='relative flex items-center justify-between bg-centriaRed px-4 py-2'>
			{/* Logo */}
			<Link href='/' className='hidden items-center md:block'>
				<p className='text-2xl font-bold text-white'>Centria Hub</p>
			</Link>

			{/* Desktop Menu */}
			<NavigationMenu className='hidden space-x-4 md:flex'>
				<NavigationMenuList>
					<NavigationMenuItem>
						{navigation.map(item => (
							<NavigationMenuLink
								key={item.name}
								href={item.href}
								className={getNavMenuLinkStyle(item.href)}
							>
								{item.icon}
								{item.name}
							</NavigationMenuLink>
						))}
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			{/* Mobile Menu */}
			<NavigationMenu className='w-full md:hidden'>
				<NavigationMenuList>
					<NavigationMenuItem>
						{/* Humberger */}
						<NavigationMenuTrigger className='bg-centriaRed text-white transition hover:bg-white hover:text-centriaRed'>
							<Menu className='' />
						</NavigationMenuTrigger>
						{/* Mobile Menu Content */}
						<NavigationMenuContent className='bg-centriaRed'>
							{navigation.map(item => (
								<NavigationMenuLink
									key={item.name}
									href={item.href}
									className={`${getNavMenuLinkStyle(item.href)} !w-full !justify-start !rounded-none`}
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
	)
}

export default NavBar
