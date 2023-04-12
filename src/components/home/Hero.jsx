import React from "react"
import rebecaTeaser from "../../assets/rebeca-video-1.mp4"

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
