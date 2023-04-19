import React from "react"
import { useCountdown } from "../../hooks/useCountdown"

const date = new Date("2023-04-20T05:30:00.000Z")
const targetDate = date.getTime()

const Countdown = () => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate)

	return (
		<div className="flex flex-col justify-center items-center py-16 md:px-16">
			<div className="text-5xl md:text-7xl font-black text-yellow-400">
				#PUJO_আসছে
			</div>
			<div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center m-5">
				<div className="flex flex-col">
					<span className="countdown font-mono text-5xl md:text-7xl">
						<span style={{ "--value": days }}></span>
					</span>
					days
				</div>
				<div className="flex flex-col">
					<span className="countdown font-mono text-5xl md:text-7xl">
						<span style={{ "--value": hours }}></span>
					</span>
					hours
				</div>
				<div className="flex flex-col">
					<span className="countdown font-mono text-5xl md:text-7xl">
						<span style={{ "--value": minutes }}></span>
					</span>
					min
				</div>
				<div className="flex flex-col">
					<span className="countdown font-mono text-5xl md:text-7xl">
						<span style={{ "--value": seconds }}></span>
					</span>
					sec
				</div>
			</div>
		</div>
	)
}

export default Countdown
