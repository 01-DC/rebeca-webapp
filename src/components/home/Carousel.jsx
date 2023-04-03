import React from "react"
import slide1 from "../../assets/slide1.png"
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"
import slide4 from "../../assets/slide4.png"

const Carousel = () => {
	return (
		<div className="container mx-auto p-8">
			<h2 className="text-5xl md:text-6xl font-extrabold">Gallery</h2>
			<div className="p-8 flex justify-around items-center flex-wrap">
				<div className="">
					<img src={slide1} className="w-full m-4" alt="..." />
				</div>
				<div className="">
					<img src={slide2} className="w-full m-4" alt="..." />
				</div>
				<div className="">
					<img src={slide3} className="w-full m-4" alt="..." />
				</div>
				<div className="">
					<img src={slide4} className="w-full m-4" alt="..." />
				</div>
			</div>
		</div>
	)
}

export default Carousel
