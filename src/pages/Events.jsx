import React, { useEffect, useState } from "react"
import PageHeader from "../components/shared/PageHeader"
import EventCard from "../components/events/EventCard"
import { events } from "../constants/eventDetails"

const Events = () => {
	// const [events, setEvents] = useState([])

	// async function getAllEvents() {
	// 	try {
	// 		const res = await axios.get("/api/v1/events")
	// 		setEvents(res.data)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// useEffect(() => {
	// 	getAllEvents()
	// }, [])

	return (
		<div>
			<PageHeader title={"Events & Competitions"} />
			<div className="py-16 md:px-16">
				<div className="flex flex-wrap justify-center gap-8">
					{events.map((event, i) => (
						<EventCard
							key={i}
							title={event.title}
							eventId={event.eventId}
							category={event.category}
							tagline={event.tagline}
							image={event.image}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Events
