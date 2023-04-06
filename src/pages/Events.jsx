import React, { useEffect, useState } from "react"
import PageHeader from "../components/shared/PageHeader"
import EventCard from "../components/events/EventCard"
import axios from "axios"

const events = Array.from(Array(26), (x, i) => i)

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
						<EventCard key={i} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Events
