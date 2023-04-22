import React from "react"
import PageHeader from "../components/shared/PageHeader"

import brochure from "../assets/FINAL EVENT BROCHURE.pdf"
import sponsors1 from "../assets/sponsors1.png"
import sponsors2 from "../assets/sponsors2.png"

const Sponsors = () => {
	return (
		<div className="bg-base-100 bg-opacity-5 backdrop-blur">
			<PageHeader title={"Our Sponsors"} />
			<div className="container mx-auto">
				<div className="p-16">
					<h2 className="text-white text-5xl font-bold mb-8">
						Past Sponsors
					</h2>
					<img src={sponsors1} className="mx-auto" alt="rebeca" />
					<img src={sponsors2} className="mx-auto" alt="rebeca" />
				</div>
				<div className="flex justify-center py-16">
					<a
						href={brochure}
						download={"Sponsorship Brochure.pdf"}
						className="btn btn-xs md:btn-lg">
						Download Sponsorship Brochure for REBECA 2023
					</a>
				</div>
			</div>
		</div>
	)
}

export default Sponsors
