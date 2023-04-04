import React from "react"
import AnimationCanvas from "./AnimationCanvas"
import hero from "../../assets/hero.png"
import rebecaTeaser from "../../assets/rebeca-video-1.m4v"

const Hero = () => {
	return (
		<div className="">
			<video
				src={rebecaTeaser}
				className="w-screen"
				autoPlay={true}
				controls={false}
				loop={true}
				muted={true}
			/>

			<AnimationCanvas />
		</div>
	)
}

export default Hero
