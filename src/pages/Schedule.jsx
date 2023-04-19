import React from "react"
import PageHeader from "../components/shared/PageHeader"
import classical from "../assets/schedule/CLASSICAL.png"
import beings from "../assets/schedule/BEINGS.png"
import kolkata from "../assets/schedule/KOLKATA.png"
import mumbai from "../assets/schedule/MUMBAI.png"

const Schedule = () => {
	return (
		<div>
			<PageHeader title="Schedule" />
			<div className="mx-auto py-16 lg:px-16">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold mb-8">
							20th April - Saptami
						</h2>
						<img src={classical} alt="rebeca" />
					</div>

					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold mb-8">
							21st April - Ashtami
						</h2>
						<img src={beings} alt="rebeca" />
					</div>

					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold mb-8">
							22nd April - Navami
						</h2>
						<img src={kolkata} alt="rebeca" />
					</div>

					<div className="rounded-xl border-4 border-rebpurple p-4">
						<h2 className="text-4xl font-bold mb-8">
							23rd April - Dashami
						</h2>
						<img src={mumbai} alt="rebeca" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Schedule
