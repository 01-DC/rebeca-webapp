import React from "react"
import image from "../../assets/bh 1.png"

const About = () => {
	return (
		<div className="bg-base-200 py-16 md:px-16">
			<div className="container mx-auto">
				<div className="flex flex-col gap-16">
					<h2
						className="text-4xl font-extrabold md:text-6xl"
						id="about">
						About Us
					</h2>
					<div className="card card-side bg-base-100 shadow-xl flex-col-reverse lg:flex-row">
						<figure className="lg:w-1/3">
							<img
								src={image}
								className="h-96 object-cover"
								alt="rebeca"
							/>
						</figure>
						<div className="card-body lg:w-2/3 p-2 md:px-8 my-auto">
							<h2 className="card-title justify-center lg:justify-start">
								REBECA @ 82
							</h2>
							<p className="text-start">
								REunion and Bengal Engineering College Annuals -
								The Annual Cultural Fest Of Iiest, Shibpur Goes
								Beyond The Standards Of A Mere College Fest To
								Become A Name Synonymous With Emotions And
								Unforgettable Memories. As The Name Suggests, It
								Started Off As A Reunion Ground For The Alumni
								To Revisit Their Alma Mater, To Meet Old
								Favorites And New Aquiantances, And Relive The
								Moments Out Of Their Time, Back In The Year
								1932. Today, This Oldest Fest Of The Country Is
								A Hub Of Pure Ecstasy And Talent Showcase With
								Per- Formances By Students As Well As Industry
								Heavyweights Like Jubin Nautiyal, Benny Dayal,
								Aditi Singh Sharma, Javed Ali, Kk, Fossils And
								Several Others. Fashion Shows, Alumni Meets,
								Band Competitions, Dance Per- Formances,
								Seminars, Literary Competitions. Rebeca Holds So
								Much More In Its Store! And With The Arrival Of
								2023, It's Time To Witness The 82nd Edition Of
								Rebeca, Another Year Of An Iconic Tradition,
								Once Again To Be Celebrated With Magnifi- Cent
								Pomp And Grandeur.
							</p>
						</div>
					</div>
					<div className="card card-side bg-base-100 shadow-xl flex-col-reverse lg:flex-row-reverse">
						<figure className="lg:w-1/3">
							<img
								className="h-96 object-cover"
								src="https://www.iiests.ac.in/assets/images/bg/05.jpg"
								alt="iiests"
							/>
						</figure>
						<div className="card-body lg:w-2/3 p-2 md:px-8 my-auto">
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
				</div>
			</div>
		</div>
	)
}

export default About
