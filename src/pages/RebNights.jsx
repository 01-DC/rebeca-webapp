import React from "react"
import PageHeader from "../components/shared/PageHeader"
import mumbai from "../assets/rebnights/mumbai.jpeg"

const RebNights = () => {
	return (
		<div>
			<PageHeader title={"REB Nights"} />
			<div className="container mx-auto py-16 md:px-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">20th April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Classical Night - Spic Macay Performances
						</h4>
						{/* <img src="" alt="rebeca" /> */}
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">21st April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							BEings Night - Pota Morudyan, DJ
						</h4>
						{/* <img src="" alt="rebeca" /> */}
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">22nd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Kolkata Night - Distorted Chromosomes, The Anupam
							Roy Band, DJ
						</h4>
						{/* <img src="" alt="rebeca" /> */}
					</div>
					<div className="rounded-xl border-4 border-rebpurple p-4">
						<h2 className="text-4xl font-bold">23rd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Mumbai Night - Anurag Haldar, Ash King, Ehsaas
							India, Sunburn Campus ft. DJ Aerro, BDM DJ
						</h4>
						<img src={mumbai} alt="rebeca" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RebNights
