import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import logo from "../../assets/rebeca-logo.png"
// import moment from "moment"
import axios from "axios"
import Loader from "./Loader"

// moment.updateLocale("en", {
// 	relativeTime: {
// 		future: "in %s",
// 		past: "%s ago",
// 		s: "1s",
// 		ss: "%ds",
// 		m: "1m",
// 		mm: "%dm",
// 		h: "1h",
// 		hh: "%dh",
// 		d: "1d",
// 		dd: "%dd",
// 		w: "1w",
// 		ww: "%dw",
// 		M: "1m",
// 		MM: "%dm",
// 		y: "1y",
// 		yy: "%dy",
// 	},
// })

const NavBar = () => {
	const { loginUser, setLoginUser, showToastHandler } = useStateContext()
	const [notifs, setNotifs] = useState([])
	const navigate = useNavigate()

	const logoutHandler = () => {
		localStorage.removeItem("user")
		localStorage.removeItem("token")
		setLoginUser("")
		showToastHandler("Logout successful", "success")
		navigate("/")
	}

	const getNotifications = async () => {
		try {
			const { data } = await axios.get("/api/v1/notif/")
			// console.log(data)
			setNotifs(data.notifs.reverse())
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<nav className="sticky top-0 z-50 navbar bg-gradient-to-r from-rebpurple from-2% via-neutral via-22% to-base-100 to-100% transition-all duration-100 text-base-content shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow-sm bg-base-300 backdrop-blur rounded-box w-52 bg-opacity-80">
						<li>
							<NavLink to="/sponsors">Sponsors</NavLink>
						</li>
						<li>
							<NavLink to="/events">Events</NavLink>
						</li>
						<li>
							<NavLink to="/workshops">Workshops</NavLink>
						</li>
						<li>
							<NavLink to="/contactus">Contact Us</NavLink>
						</li>
					</ul>
				</div>
				<NavLink to="/" className="btn btn-ghost">
					<img
						src={logo}
						className="max-w-sm"
						width="100"
						height="100"
					/>
				</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					<li className="rounded-lg">
						<NavLink to="/sponsors">Sponsors</NavLink>
					</li>
					<li className="rounded-lg">
						<NavLink to="/events">Events</NavLink>
					</li>
					<li className="rounded-lg">
						<NavLink to="/workshops">Workshops</NavLink>
					</li>
					<li className="rounded-lg">
						<NavLink to="/contactus">Contact Us</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="flex items-center">
					<div className="dropdown dropdown-end">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle"
							onClick={getNotifications}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
							{notifs?.length > 0 ? (
								notifs?.map((n, i) => (
									<li
										className="p-2 my-2 border rounded-lg"
										key={i}>
										<h5 className="font-bold text-lg">
											{n.title}
										</h5>
										<p className="text-md leading-tight mt-2">
											{n.desc}
										</p>
										<p>
											{moment(
												n.created_at,
												moment.ISO_8601
											).fromNow()}
										</p>
									</li>
								))
							) : (
								<div className="flex justify-center">
									<Loader />
								</div>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar