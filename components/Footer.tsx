import Link from 'next/link'
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
	return(
	  <footer className='flex items-center justify-center bg-centriaRed p-5 grid lg:grid-cols-3'>
		  {/* Navigation Menu */}
		  <div className='flex flex-row gap-5 text-white mb-3 lg:mb-0'>
			  <Link href="/" className='hover:scale-110 transition-transform duration-300'>Home</Link>
			  <Link href="/news" className='hover:scale-110 transition-transform duration-300'>News</Link>
			  <Link href="/events" className='hover:scale-110 transition-transform duration-300'>Events</Link>
			  <Link href="/articles" className='hover:scale-110 transition-transform duration-300'>Articles</Link>
			  <Link href="/about" className='hover:scale-110 transition-transform duration-300'>About</Link>
		  </div>
		  {/* Logo */}
		  <Link href="/" className=''>
			  <p className='text-2xl font-bold text-white text-center'>Centria Hub</p>
		  </Link>
		  {/* Social Media */}
		  <div className='flex flex-row justify-center items-center gap-5 lg:justify-end lg:items-end mt-3 lg:mt-0'>
			  <Link
				href="https://www.facebook.com/centriaamk"
				className='rounded-full p-2 bg-white hover:scale-110 transition-transform duration-300'
				target="_blank"
				rel="noopener noreferrer"
			  >
				  <Facebook color='#E40038'/>
			  </Link>
			  <Link
				href="https://www.instagram.com/centriaamk/"
				className='rounded-full p-2 bg-white hover:scale-110 transition-transform duration-300'
				target="_blank"
				rel="noopener noreferrer"
			  >
				  <Instagram color='#E40038'/>
			  </Link>
			  <Link
				href="https://www.youtube.com/channel/UCzr6nbgNOVaBkkDlcvvsiaw"
				className='rounded-full p-2 bg-white hover:scale-110 transition-transform duration-300'
				target="_blank"
				rel="noopener noreferrer"
			  >
				  <Youtube color='#E40038'/>
			  </Link>
			  <Link
				href="https://www.linkedin.com/school/3964501/"
				className='rounded-full p-2 bg-white hover:scale-110 transition-transform duration-300'
				target="_blank"
				rel="noopener noreferrer"
			  >
				  <Linkedin color='#E40038'/>
			  </Link>
		  </div>
	  </footer>
	)
}

export default Footer;