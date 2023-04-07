import React from "react"
import { Link } from "react-router-dom"

const EventCard = ({ eventId, title, category, desc, image }) => {
	return (
		<div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
			<figure>
				<img src={image} alt="Event Poster" />
			</figure>
			<div className="card-body overflow-y-auto">
				<h2 className="card-title text-2xl">{title}</h2>
				<div className="badge badge-secondary badge-md font-semibold tracking-wide">
					{category}
				</div>
				<p>{desc.slice(0, 140)}...</p>
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
