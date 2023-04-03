import React from "react"
import hero from "../../assets/hero.png"
import rebecaTeaser from "../../assets/rebeca-video.m4v"

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
		</div>
	)
}

export default Hero
