// The Home component serves as the main page, rendering other components
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
	<div>
	  <Hero/>
		<LatestCollection/>
		<OurPolicy/>
	</div>
  )
}

export default Home
