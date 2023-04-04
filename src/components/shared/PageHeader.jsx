import React from "react"
import headerImage from "../../assets/header.jpg"

const PageHeader = ({ title }) => {
	return (
		<div className="sticky -top-28 w-screen h-64 z-30 bg-base-100">
			<img
				src={headerImage}
				className="opacity-50 h-full object-cover"
				alt="rebeca"
			/>

			<div className="absolute bottom-4">
				<h2 className="font-bold text-4xl px-2 md:text-6xl md:px-16">
					{title}
				</h2>
			</div>
		</div>
	)
}

export default PageHeader
