import React from "react"
import AnimationCanvas from "../shared/AnimationCanvas"
import tshirtfront from "../../assets/Rebeca T shirt Front.png"
import tshirtback from "../../assets/Rebeca T shirt Back.png"

const TShirtCTA = () => {
	return (
		<div class="w-full flex flex-col lg:flex-row py-24 gap-16 bg-base-200 px-4 lg:px-16">
			<div class="lg:w-1/3 mx-4 flex justify-center items-center">
				<div
					id="carouselExampleCaptions1"
					class="carousel slide relative carousel-fade carousel-dark shadow-xl rounded-2xl border-4 border-primary my-12 w-96 py-2"
					data-bs-ride="carousel">
					<div class="carousel-indicators absolute bottom-4 left-0 flex flex-col gap-7 p-0 mb-8 ml-4 opacity-80">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions1"
							data-bs-slide-to="0"
							class="active border-t-0 border-2 border-primary"
							aria-current="true"
							aria-label="Slide 1">
							<img
								src={tshirtfront}
								class="object-cover w-9 h-9 ring-2 p-0.5 ring-base-100 rounded-md transition duration-300"
							/>
						</button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions1"
							data-bs-slide-to="1"
							aria-label="Slide 2">
							<img
								src={tshirtback}
								class="object-cover w-9 h-9 ring-2 p-0.5 ring-base-100 rounded-md transition duration-300"
							/>
						</button>
					</div>
					<div class="carousel-inner relative w-full overflow-hidden ml-8">
						<div class="carousel-item active relative float-left w-full">
							<img
								src={tshirtfront}
								class="block w-full h-96 object-cover p-4"
								alt="..."
							/>
						</div>
						<div class="carousel-item relative float-left w-full">
							<img
								src={tshirtback}
								class="block w-full h-96 object-cover p-4"
								alt="..."
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full px-4 flex flex-col justify-center items-center lg:items-start">
				<div className="relative w-full">
					<AnimationCanvas />
					<h2
						className="text-4xl font-extrabold md:text-6xl pl-4 shadow-2xl absolute top-1/2 -translate-y-1/2"
						id="about">
						Get our official merchandise
					</h2>
				</div>
				<p class="mt-8 text-center lg:text-start">
					REBECA 2023 is back with a bang, this time with a statement
					Tee!
					<br />
					It's time to gear up for the epic college fest Rebeca with
					the sickest t-shirt design yet! This limited edition t-shirt
					features the badass logo of the event with the date and
					location, making it a must-have for all you party animals
					out there. Dancing to the hottest tunes this t-shirt is the
					perfect way to show off your Rebeca spirit. So, get your
					wallets ready and snag one of these dope t-shirts before
					they're all gone!
					<br />
					#pujo_ashche #rebeca2k23
				</p>
				<a
					href="https://forms.gle/S6BgU4ZaZhX7jVrL6"
					target="__blank"
					class="btn btn-primary btn-wide rounded-full mb-4 mt-10 tracking-wide">
					Get your t-shirt now
				</a>
			</div>
		</div>
	)
}

export default TShirtCTA
