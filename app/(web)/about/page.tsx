import About from '@/app/components/aboutpage/About'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/utils/Navbar'
import React from 'react'


const page = () => {
  return (
	<>
	<Navbar />
	<About />
	<Footer />
	</>
  )
}

export default page