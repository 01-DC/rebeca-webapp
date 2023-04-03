import React from "react"
import image from "../../assets/bh 1.png"

const About = () => {
	return (
		<div className="bg-base-200 py-16 md:px-8">
			<div className="container mx-auto">
				<div className="flex flex-col gap-16">
					<h2
						className="text-5xl font-extrabold md:text-6xl"
						id="about">
						About Us
					</h2>
					<div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row-reverse">
						<figure className="lg:w-1/3">
							<img
								className="h-96 object-cover"
								src="https://www.iiests.ac.in/assets/images/bg/05.jpg"
								alt="iiests"
							/>
						</figure>
						<div className="card-body lg:w-2/3 px-8 my-auto">
							<h2 className="card-title justify-center lg:justify-start">
								IIEST, Shibpur
							</h2>
							<p className="text-start">
								Indian Institute of Engineering Science and
								Technology, Shibpur (IIEST Shibpur), erstwhile
								Bengal Engineering College (also known as B.E.
								College), formerly Bengal Engineering and
								Science University , is a public research
								university also a National Institute of
								Technology located at Shibpur, Howrah, West
								Bengal. Founded in 1856,it is one of the oldest
								public research university. It is recognized as
								an Institute of National Importance under MHRD
								by the Government of India. IIEST serves as a
								center for advanced learning and research. The
								primary activities are the creation and
								dissemination of knowledge, the production of
								high-quality engineers, scientists, and
								entrepreneurs equipped with cutting-edge
								technology, and the development of innovative
								technology solutions for the benefit of society.
							</p>
						</div>
					</div>
					<div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row">
						<figure className="lg:w-1/3">
							<img
								src={image}
								className="h-96 object-cover"
								alt="rebeca"
							/>
						</figure>
						<div className="card-body lg:w-2/3 px-8 my-auto">
							<h2 className="card-title justify-center lg:justify-start">
								REBECA @ 82
							</h2>
							<p className="text-start">
								Kolkata's Largest Technical Festival is
								organized annually by the student community of
								the Indian Institute of Engineering Science and
								Technology, Shibpur (IIEST Shibpur). It is
								usually held annually and provides a platform
								for students to showcase their technical and
								cultural skills and participate in various
								events and competitions. The tech fest features
								paper presentations, project exhibitions, coding
								competitions, debates, music and dance
								performances, and much more. The festival
								attracts students from across the country and
								provides an excellent opportunity for
								networking, learning, and overall personal
								growth. We have seminars, robot fights, coder
								wars, and much much more. So, by chance, if you
								happen to be a hungry tech freak looking for a
								worthy friend or maybe even a friend, come and
								witness the grandest tech fest in the City of
								Joy accompanied by its colossal number of events
								ranging from technical like robot and code wars
								to beautiful and surreal literary contests!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
