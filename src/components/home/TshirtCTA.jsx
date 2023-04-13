import React from "react"
import AnimationCanvas from "../shared/AnimationCanvas"
import tshirtfront from "../../assets/Rebeca T shirt Front.png"
import tshirtback from "../../assets/Rebeca T shirt Back.png"

const TShirtCTA = () => {
	return (
		<div class="bg-base-200 bg-opacity-5 backdrop-blur py-16 md:px-16">
			<div className="relative w-full">
				<AnimationCanvas />
				<h2
					className="text-4xl font-extrabold md:text-6xl pl-4 shadow-2xl absolute top-1/2 -translate-y-1/2"
					id="about">
					Get our official merchandise
				</h2>
			</div>
			<div className="container mx-auto">
				<div class="flex flex-col justify-center items-center">
					<div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-16">
						<div className="flex outline rounded-xl p-4 md:p-8 lg:p-16">
							<div class="">
								<img src={tshirtfront} class="" alt="..." />
							</div>
							<div class="">
								<img src={tshirtback} class="" alt="..." />
							</div>
						</div>
						<div className="md:h-96 flex flex-col items-center justify-between gap-8">
							<p class="text-left">
								REBECA 2023 is back with a bang, this time with
								a statement Tee!
								<br />
								It's time to gear up for the epic college fest
								Rebeca with the sickest t-shirt design yet! This
								limited edition t-shirt features the badass logo
								of the event with the date and location, making
								it a must-have for all you party animals out
								there. Dancing to the hottest tunes this t-shirt
								is the perfect way to show off your Rebeca
								spirit. So, get your wallets ready and snag one
								of these dope t-shirts before they're all gone!
								<br />
								#pujo_ashche #rebeca2k23
							</p>
							<a
								href="https://forms.gle/S6BgU4ZaZhX7jVrL6"
								target="__blank"
								class="btn btn-primary btn-wide rounded-full md:ml-auto tracking-wide">
								Get your t-shirt now
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TShirtCTA
