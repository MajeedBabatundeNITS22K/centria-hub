import Image from 'next/image'
import Link from 'next/link'

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='grid items-center justify-center bg-centriaRed p-5 lg:grid-cols-3'>
			{/* Contact Information  */}
			<div className='mb-5 flex flex-col items-center gap-1 text-white lg:mx-auto lg:mb-0 lg:items-start'>
				<p className='text-xl font-bold text-white'>
					Centria University of Applied Sciences
				</p>
				<p>Talonpojankatu 2A</p>
				<p>67100 Kokkola, Finland</p>
				<p>Tel: +358 6 868 0200</p>
				<p>info@centria.fi</p>
			</div>
			{/* Logo and Social Media */}
			<div className='mb-5 flex flex-col items-center justify-center gap-2 lg:mb-0'>
				<Link href='/' className='flex items-center justify-center gap-2'>
					<Image src='/logo.svg' alt='logo' width={20} height={20} />
					<p className='text-center text-2xl font-bold text-white'>
						Centria Hub
					</p>
				</Link>
				<div className='flex flex-row items-center justify-center gap-5'>
					<Link
						href='https://www.facebook.com/centriaamk'
						className='rounded-full bg-white p-2 transition-transform duration-300 hover:scale-110'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Facebook color='#E40038' />
					</Link>
					<Link
						href='https://www.instagram.com/centriaamk/'
						className='rounded-full bg-white p-2 transition-transform duration-300 hover:scale-110'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Instagram color='#E40038' />
					</Link>
					<Link
						href='https://www.youtube.com/channel/UCzr6nbgNOVaBkkDlcvvsiaw'
						className='rounded-full bg-white p-2 transition-transform duration-300 hover:scale-110'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Youtube color='#E40038' />
					</Link>
					<Link
						href='https://www.linkedin.com/school/3964501/'
						className='rounded-full bg-white p-2 transition-transform duration-300 hover:scale-110'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Linkedin color='#E40038' />
					</Link>
				</div>
			</div>
			{/* Navigation Menu */}
			<div className='flex flex-col items-center gap-3 text-white'>
				<p className='text-2xl font-bold'>Contents</p>
				<div className='flex flex-row gap-3'>
					<Link
						href='/'
						className='transition-transform duration-300 hover:scale-110'
					>
						Home
					</Link>
					<Link
						href='/news'
						className='transition-transform duration-300 hover:scale-110'
					>
						News
					</Link>
					<Link
						href='/events'
						className='transition-transform duration-300 hover:scale-110'
					>
						Events
					</Link>
					<Link
						href='/articles'
						className='transition-transform duration-300 hover:scale-110'
					>
						Articles
					</Link>
					<Link
						href='/about'
						className='transition-transform duration-300 hover:scale-110'
					>
						About
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
