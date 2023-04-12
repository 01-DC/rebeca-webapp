import React from "react"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Carousel from "../components/home/Carousel"
import TShirtCTA from "../components/home/TshirtCTA"
import Countdown from "../components/home/Countdown"

const Home = () => {
	return (
		<div>
			<Hero />
			<Countdown />
			<About />
			<Carousel />
			<TShirtCTA />
		</div>
	)
}

export default Home
