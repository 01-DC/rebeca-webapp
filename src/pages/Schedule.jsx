import React from "react"
import PageHeader from "../components/shared/PageHeader"

const Schedule = () => {
	return (
		<div>
			<PageHeader title="Schedule" />
			<div className="mx-auto py-16 lg:px-16">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">
							20th April - Classical Night
						</h2>
						<div className="overflow-x-auto">
							<table className="table table-zebra w-full">
								{/* head */}
								<thead>
									<tr>
										<th>Event</th>
										<th>Time</th>
										<th>Venue</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Cy Ganderton</td>
										<td>Quality Control Specialist</td>
										<td>Blue</td>
									</tr>
									<tr>
										<td>Hart Hagerty</td>
										<td>Desktop Support Technician</td>
										<td>Purple</td>
									</tr>
									<tr>
										<td>Brice Swyre</td>
										<td>Tax Accountant</td>
										<td>Red</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">
							21st April - BEings Night
						</h2>
					</div>

					<div className="rounded-xl border-4 p-4 border-rebpurple">
						<h2 className="text-4xl font-bold">
							22nd April - Kolkata Night
						</h2>
					</div>

					<div className="rounded-xl border-4 border-rebpurple p-4">
						<h2 className="text-4xl font-bold">
							23rd April - Mumbai Night
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Schedule
