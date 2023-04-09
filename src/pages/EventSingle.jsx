import React from "react"
import { useParams } from "react-router-dom"
import { getEventDetails } from "../utils/helperFunctions"

import PageHeader from "../components/shared/PageHeader"
import DetailsCard from "../components/eventSingle/DetailsCard"
import RoundDetails from "../components/eventSingle/RoundDetails"

const EventSingle = () => {
	const { id } = useParams()

	const event = getEventDetails(id)

	return (
		<div>
			<PageHeader title={event.title} />
			<div className="py-16 md:px-16">
				<DetailsCard event={event} />
				<RoundDetails event={event} />
			</div>
		</div>
	)
}

export default EventSingle
