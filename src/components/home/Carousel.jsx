import React from "react"
import AnimationCanvas from "../shared/AnimationCanvas"
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import slide4 from "../../assets/slide4.jpg"

const Carousel = () => {
	return (
		<div className="bg-base-100 bg-opacity-5 backdrop-blur py-16 md:px-16">
			<div className="relative">
				<AnimationCanvas />
				<h2
					className="text-4xl font-extrabold md:text-6xl pl-4 drop-shadow-2xl absolute top-1/2 -translate-y-1/2"
					id="about">
					Gallery
				</h2>
			</div>

			<div className="container mx-auto">
				<div className="mt-16">
					<div className="w-full aspect-video carousel carousel-vertical rounded-box">
						<div className="carousel-item">
							<img src={slide1} alt="rebeca" />
						</div>
						<div className="carousel-item">
							<img src={slide2} alt="rebeca" />
						</div>
						<div className="carousel-item">
							<img src={slide3} alt="rebeca" />
						</div>
						<div className="carousel-item">
							<img src={slide4} alt="rebeca" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Carousel
