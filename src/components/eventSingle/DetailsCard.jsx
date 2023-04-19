import React from "react"
import AnimationCanvas from "../shared/AnimationCanvas"

const DetailsCard = ({ event }) => {
	return (
		<div className="relative py-16 lg:px-16">
			<div className="w-full h-full absolute top-0 left-0 -z-10">
				<AnimationCanvas />
			</div>
			<div className="grid gap-8 lg:grid-cols-2 place-items-center bg-base-300 rounded-3xl bg-opacity-40 backdrop-blur lg:p-8">
				<div className="flex flex-col gap-8">
					<div>
						<h2 className="text-3xl font-bold">{event.title}</h2>
						<p className="italic">{event.tagline}</p>
					</div>
					{event.prize_pool && (
						<div>
							<h2 className="text-3xl font-bold text-secondary">
								Prize pool
							</h2>
							<p className="text-lg text-secondary">{`Rs. ${event.prize_pool}`}</p>
						</div>
					)}
					<div>
						<h2 className="text-3xl font-bold">About</h2>
						<p>{event.desc}</p>
					</div>
					<div>
						<h2 className="text-3xl font-bold text-secondary">
							Category
						</h2>
						<p className="text-secondary">{`${event.category} (${event.type})`}</p>
					</div>
					<div>
						<h2 className="text-3xl font-bold">Coordinators</h2>
						{event.contacts.map((con, i) => (
							<p key={i}>{`${con.name}: ${con.phone}`}</p>
						))}
					</div>
					{event.payment_link && (
						<a
							className="btn btn-primary rounded-xl w-40"
							href={event.payment_link}
							target="_blank">
							Register
						</a>
					)}
				</div>
				<div className="place-self-center order-first lg:order-none">
					<img
						src={event.image}
						className="h-[60vh]"
						alt={event.title}
					/>
				</div>
			</div>
		</div>
	)
}

export default DetailsCard
