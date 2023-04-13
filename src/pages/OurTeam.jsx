import React from "react"
import PageHeader from "../components/shared/PageHeader"
import { teamDetails } from "../constants/teamDetails"
import gautam from "../assets/team/Gautam_Anand.jpg"
import madhumita from "../assets/team/Madhumita_Roy.jpg"
import neel from "../assets/team/Neel_Diganta_Bhadra.jpg"
import santanu from "../assets/team/Santanu_Maity.jfif"
import subhash from "../assets/team/Subhash_Chandra_Mondal.jpg"

const OurTeam = () => {
	return (
		<div>
			<PageHeader title={"Our Team"} />
			<div className="flex flex-col justify-center items-center gap-16 py-16">
				<div className="flex flex-col items-center gap-4">
					<div className="avatar">
						<div className="w-40 rounded-full">
							<img src={subhash} />
						</div>
					</div>
					<p className="bg-base-300 p-4 rounded-full">
						Prof. Subhash Chandra Mondal, Mechanical Engineering
						(Chairman)
					</p>
				</div>

				<div className="flex gap-8 justify-center items-center">
					<div className="flex flex-col items-center gap-4">
						<div className="avatar">
							<div className="w-40 rounded-full">
								<img src={gautam} />
							</div>
						</div>
						<p className="bg-base-300 p-4 rounded-full">
							Dr. Gautam Anand, Metallurgy & Materials Engineering
							(Jt. Convener)
						</p>
					</div>
					<div className="flex flex-col items-center gap-4">
						<div className="avatar">
							<div className="w-40 rounded-full">
								<img src={madhumita} />
							</div>
						</div>
						<p className="bg-base-300 p-4 rounded-full">
							Dr. Madhumita Roy, Humanities & Social Sciences (Jt.
							Convener)
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4">
					<div className="avatar">
						<div className="w-40 rounded-full">
							<img src={santanu} />
						</div>
					</div>
					<p className="bg-base-300 p-4 rounded-full">
						Dr. Santanu Maity, Green Energy & Sensor System
						(Treasurer)
					</p>
				</div>
				<div className="flex gap-8 justify-center items-center">
					<div className="flex flex-col items-center gap-4">
						<div className="avatar">
							<div className="w-40 rounded-full">
								<img src={neel} />
							</div>
						</div>
						<p className="bg-base-300 p-4 rounded-full">
							Neel Diganta Bhadra (Secretary General)
						</p>
					</div>
					<div className="flex flex-col items-center gap-4">
						<div className="avatar">
							<div className="w-40 rounded-full">
								<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
							</div>
						</div>
						<p className="bg-base-300 p-4 rounded-full">
							Rohan Jana (Secretary General)
						</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center text-center py-16 md:px-16">
				{teamDetails.map((team, i) => (
					<div className="bg-base-300 rounded-2xl p-8" key={i}>
						<h2 className="text-3xl font-bold mb-4">
							{team.title}
						</h2>
						{team.members.map((member, ii) => (
							<p key={ii}>{member}</p>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default OurTeam
