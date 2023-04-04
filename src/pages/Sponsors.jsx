import React from "react"
import PageHeader from "../components/shared/PageHeader"

import brochure from "../assets/FINAL SPONSORSHIP BROCHURE - SINGLE PAGES.pdf"
import sponsors1 from "../assets/sponsors1.png"
import sponsors2 from "../assets/sponsors2.png"

const Sponsors = () => {
	return (
		<div>
			<PageHeader title={"Past Sponsors"} />
			<div className="container mx-auto">
				<div className="flex justify-center py-16">
					<a
						href={brochure}
						download={"Sponsorship Brochure.pdf"}
						className="btn btn-xs md:btn-lg">
						Download Sponsorship Brochure for REBECA 2023
					</a>
				</div>
				<div className="bg-neutral-300 p-16">
					<img src={sponsors1} className="mx-auto" alt="rebeca" />
					<img src={sponsors2} className="mx-auto" alt="rebeca" />
				</div>
			</div>
		</div>
	)
}

export default Sponsors
