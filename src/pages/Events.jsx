import React from "react"
import PageHeader from "../components/shared/PageHeader"

const events = Array.from(Array(26), (x, i) => i)

const Events = () => {
	return (
		<div>
			<PageHeader title={"Events & Competitions"} />
			<div className="py-16 md:px-16">
				<div className="flex flex-wrap justify-center gap-8">
					{events.map((event, i) => (
						<div
							key={i}
							className="card w-96 bg-base-100 shadow-xl image-full">
							<figure>
								<img
									src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
									alt="Shoes"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">Shoes!</h2>
								<p>
									If a dog chews shoes whose shoes does he
									choose?
								</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">
										Buy Now
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Events
