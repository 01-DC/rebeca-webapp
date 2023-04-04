import React from "react"
import PageHeader from "../components/shared/PageHeader"
import EventCard from "../components/events/EventCard"

const events = Array.from(Array(26), (x, i) => i)

const Events = () => {
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
