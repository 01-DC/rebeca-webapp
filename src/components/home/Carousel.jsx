import React from "react"
import AnimationCanvas from "../shared/AnimationCanvas"
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import slide4 from "../../assets/slide4.jpg"

const Carousel = () => {
	return (
		<div className="bg-base-100 py-16 md:px-16">
			<div className="relative">
				<AnimationCanvas />
				<h2
					className="text-4xl font-extrabold md:text-6xl pl-4 drop-shadow-2xl absolute top-1/2 -translate-y-1/2"
					id="about">
					Gallery
				</h2>
			</div>
			<div className="mt-16 container mx-auto">
				<div
					id="carouselExampleIndicators"
					class="relative"
					data-te-carousel-init
					data-te-carousel-slide>
					<div
						class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
						data-te-carousel-indicators>
						<button
							type="button"
							data-te-target="#carouselExampleIndicators"
							data-te-slide-to="0"
							data-te-carousel-active
							class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
							aria-current="true"
							aria-label="Slide 1"></button>
						<button
							type="button"
							data-te-target="#carouselExampleIndicators"
							data-te-slide-to="1"
							class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
							aria-label="Slide 2"></button>
						<button
							type="button"
							data-te-target="#carouselExampleIndicators"
							data-te-slide-to="2"
							class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
							aria-label="Slide 3"></button>
						<button
							type="button"
							data-te-target="#carouselExampleIndicators"
							data-te-slide-to="3"
							class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
							aria-label="Slide 4"></button>
					</div>
					<div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
						<div
							class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
							data-te-carousel-item
							data-te-carousel-active>
							<img
								src={slide1}
								class="block w-full aspect-video object-center object-cover"
								alt="rebeca"
							/>
						</div>
						<div
							class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
							data-te-carousel-item>
							<img
								src={slide2}
								class="block w-full aspect-video object-center object-cover"
								alt="rebeca"
							/>
						</div>
						<div
							class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
							data-te-carousel-item>
							<img
								src={slide3}
								class="block w-full aspect-video object-center object-cover"
								alt="rebeca"
							/>
						</div>
						<div
							class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
							data-te-carousel-item>
							<img
								src={slide4}
								class="block w-full aspect-video object-center object-cover"
								alt="rebeca"
							/>
						</div>
					</div>
					<button
						class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
						type="button"
						data-te-target="#carouselExampleIndicators"
						data-te-slide="prev">
						<span class="inline-block h-8 w-8">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								class="h-6 w-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5L8.25 12l7.5-7.5"
								/>
							</svg>
						</span>
						<span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
							Previous
						</span>
					</button>
					<button
						class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
						type="button"
						data-te-target="#carouselExampleIndicators"
						data-te-slide="next">
						<span class="inline-block h-8 w-8">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								class="h-6 w-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</span>
						<span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
							Next
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Carousel
