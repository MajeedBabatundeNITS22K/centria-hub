import React from 'react'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	)
}
export default Layout
