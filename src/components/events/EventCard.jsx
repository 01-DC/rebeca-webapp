import React from "react"
import { Link } from "react-router-dom"

const EventCard = ({ eventId, title, category, tagline, image }) => {
	return (
		<Link to={`/events/${eventId}`}>
			<div className="card w-96 h-96 shadow-xl image-full before:!opacity-0">
				<figure className="">
					<img
						src={image}
						alt={title}
						className="w-full opacity-30"
						loading="lazy"
					/>
				</figure>
				<div className="card-body overflow-y-auto">
					<h2 className="card-title drop-shadow-xl text-2xl text-white">
						{title}
					</h2>
					<div className="badge badge-secondary badge-md font-semibold tracking-wide">
						{category}
					</div>
					<p className="text-white">{tagline}</p>
					<div className="card-actions justify-end">
						<button className="text-white font-bold">
							Click to view details
						</button>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default EventCard
