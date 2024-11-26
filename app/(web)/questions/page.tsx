import Footer from '@/app/components/Footer'
import Questions from '@/app/components/questions/Questions'
import Navbar from '@/app/utils/Navbar'
import React from 'react'

const page = () => {
  return (
	<>
  <Navbar />
  <Questions />
  <Footer />
   </>
  )
}

export default page