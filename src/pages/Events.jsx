import React, { useEffect, useState } from "react"
import PageHeader from "../components/shared/PageHeader"
import EventCard from "../components/events/EventCard"
import { events } from "../constants/eventDetails"

const Events = () => {
	return (
		<div className="bg-base-100">
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
