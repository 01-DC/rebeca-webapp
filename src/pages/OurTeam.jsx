import React from "react"
import PageHeader from "../components/shared/PageHeader"
import { teamDetails } from "../constants/teamDetails"

const OurTeam = () => {
	return (
		<div>
			<PageHeader title={"Our Team"} />
			<div className="grid grid-cols-2 gap-8 place-items-center text-center py-16 md:px-16">
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
