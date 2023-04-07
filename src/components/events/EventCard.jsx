import React from "react"
import { Link } from "react-router-dom"

const EventCard = ({ eventId, title, category, tagline, image }) => {
	return (
		<div className="card w-96 h-96 shadow-xl image-full before:!opacity-70">
			<figure className="">
				<img src={image} alt={title} className="w-full" />
			</figure>
			<div className="card-body overflow-y-auto">
				<h2 className="card-title text-2xl text-white">{title}</h2>
				<div className="badge badge-secondary badge-md font-semibold tracking-wide">
					{category}
				</div>
				<p className="text-white">{tagline}</p>
				<div className="card-actions justify-end">
					<Link to={`/events/${eventId}`}>
						<button className="btn btn-primary">
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default EventCard
