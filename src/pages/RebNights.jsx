import React from "react"
import PageHeader from "../components/shared/PageHeader"
import mumbai from "../assets/rebnights/mumbai.jpeg"
import mumbai2 from "../assets/rebnights/mumbai2.jpeg"
import mumbai3 from "../assets/rebnights/mumbai3.jpeg"
import mumbai4 from "../assets/rebnights/mumbai4.jpeg"
import classical from "../assets/rebnights/classical.png"
import classical2 from "../assets/rebnights/classical2.jpeg"
import beings from "../assets/rebnights/beings.jpeg"
import beings2 from "../assets/rebnights/beings2.webp"
import beings3 from "../assets/rebnights/beings3.jpeg"
import kolkata from "../assets/rebnights/kolkata.png"
import kolkata2 from "../assets/rebnights/kolkata2.png"
import kolkata3 from "../assets/rebnights/kolkata3.jpeg"

const RebNights = () => {
	return (
		<div>
			<PageHeader title={"REB Nights"} />
			<div className="mx-auto py-16 px-4 md:px-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
					<div className="rounded-xl border-4 border-rebpurple p-4">
						<h2 className="text-4xl font-bold">23rd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Mumbai Night - Ash King, Sunburn Campus ft. DJ Aerro
						</h4>
						<img src={mumbai} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 border-rebpurple p-4">
						<h2 className="text-4xl font-bold">23rd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Mumbai Night - Anurag Haldar
						</h4>
						<img src={mumbai2} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 border-rebpurple p-4">
						<h2 className="text-4xl font-bold">23rd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Mumbai Night - Ehsaas India
						</h4>
						<img src={mumbai3} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 border-rebpurple p-4">
						<h2 className="text-4xl font-bold">23rd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Mumbai Night - DJ Abhi
						</h4>
						<img src={mumbai4} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">22nd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Kolkata Night - The Anupam Roy Band
						</h4>
						<img src={kolkata2} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">22nd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Kolkata Night - Distorted Chromosomes
						</h4>
						<img src={kolkata} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">22nd April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Kolkata Night - DJ Raxo
						</h4>
						<img src={kolkata3} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">21st April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							BEings Night - Pata Morudyan
						</h4>
						<img src={beings} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">21st April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							BEings Night - Anubhuti
						</h4>
						<img src={beings2} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">21st April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							BEings Night - DJ Nilashree
						</h4>
						<img src={beings3} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">20th April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Classical Night - Spic Macay Performances
						</h4>
						<img src={classical2} alt="rebeca" />
					</div>
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">20th April</h2>
						<h4 className="text-2xl mb-8 text-secondary">
							Classical Night - Odissi Odyssey by Shinjan
							Nrityalaya
						</h4>
						<img src={classical} alt="rebeca" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RebNights
