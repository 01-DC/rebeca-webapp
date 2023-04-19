import React from "react"

const RoundDetails = ({ event }) => {
	return (
		<div className="flex flex-col gap-8 py-16 md:px-16">
			<div>
				<h2 className="text-2xl font-semibold">
					*Refer to Schedule for Event time and Venue
				</h2>
			</div>

			{event.prize_pool && (
				<h2 className="text-3xl font-bold">{`Prize Pool - Rs. ${event.prize_pool}`}</h2>
			)}
			{event.registration_amount && (
				<div>
					<p>Registration Fees: {event.registration_amount}</p>
					<p>No registration fee for students from IIEST</p>
				</div>
			)}
			{event.rounds.map((r, i) => (
				<div key={i}>
					<h2 className="text-3xl font-bold">{`${r.title} Rules & Regulations`}</h2>
					<ul className="list-disc list-inside mt-2">
						{r.rules.map((rule, i) => (
							<li key={i}>{rule}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}

export default RoundDetails
