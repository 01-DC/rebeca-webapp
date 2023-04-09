import { events } from "../constants/eventDetails"

export const getEventDetails = (id) => {
	const selectedEvent = events.filter((event) => event.eventId === id)
	return selectedEvent[0]
}
