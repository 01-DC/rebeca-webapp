import React from "react"
import headerImage from "../../assets/header.jpg"

const PageHeader = ({ title }) => {
	return (
		<div className="sticky -top-28 w-screen h-64 z-30">
			<div className="bg-base-100 h-full w-full">
				<img
					src={headerImage}
					className="opacity-50 h-full w-full object-cover object-center"
					alt="rebeca"
				/>
			</div>

			<div className="absolute bottom-4">
				<h2 className="font-bold text-4xl px-2 md:text-6xl md:px-16">
					{title}
				</h2>
			</div>
		</div>
	)
}

export default PageHeader
