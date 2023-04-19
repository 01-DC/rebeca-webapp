import React from "react"
import PageHeader from "../components/shared/PageHeader"
import mumbai from "../assets/rebnights/mumbai.jpeg"
import mumbai2 from "../assets/rebnights/mumbai2.jpeg"
import classical from "../assets/rebnights/classical.jpeg"

const RebNights = () => {
	return (
		<div>
			<PageHeader title={"REB Nights"} />
			<div className="mx-auto py-16 px-4 md:px-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
					<div className="rounded-xl border-4 border-rebpurple p-4">
						<h2 className="text-4xl font-bold">23rd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Mumbai Night - Ash King, Ehsaas India, Sunburn
							Campus ft. DJ Aerro, BDM DJ
						</h4>
						<img className="" src={mumbai} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 border-rebpurple p-4">
						<h2 className="text-4xl font-bold">23rd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Mumbai Night - Anurag Haldar
						</h4>
						<img src={mumbai2} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">22nd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Kolkata Night - Distorted Chromosomes, The Anupam
							Roy Band, DJ
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
						<h2 className="text-4xl font-bold">20th April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Classical Night - Spic Macay Performances
						</h4>
						<img src={classical} alt="rebeca" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RebNights
