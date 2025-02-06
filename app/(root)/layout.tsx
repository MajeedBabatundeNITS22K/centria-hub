import React from 'react'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BackToTop from '@/components/BackToTop';

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
	return (
	  <div className='relative'>
		  <NavBar/>
		  {children}
		  <BackToTop />
		  <Footer />
	  </div>
	)
}
export default Layout