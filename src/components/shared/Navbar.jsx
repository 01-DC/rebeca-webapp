import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
// import logo from "../../assets/logo.svg"
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
		<nav className="sticky top-[1rem] z-50 navbar bg-base-300 rounded-box bg-opacity-60 mt-[1rem] backdrop-blur transition-all duration-100 text-base-content shadow-sm w-11/12 mx-auto">
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
						{!loginUser && (
							<>
								<li>
									<NavLink to="/login">Log In</NavLink>
								</li>
								<li>
									<NavLink to="/signup">Register</NavLink>
								</li>
							</>
						)}
					</ul>
				</div>
				<NavLink to="/" className="btn btn-ghost normal-case text-xl">
					<img className="max-w-sm mx-3" width="25" height="25" />
					REBECA
				</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
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
			<div className="navbar-end">
				{loginUser ? (
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

						<div className="dropdown dropdown-end mr-3">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle avatar">
								<div className="w-8 h-8 rounded-full">
									<svg
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
										/>
									</svg>
								</div>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 bg-opacity-80 backdrop-blur rounded-box w-52">
								<li>
									<NavLink to="/profile">Profile</NavLink>
								</li>
								<li onClick={logoutHandler}>
									<a>Logout</a>
								</li>
							</ul>
						</div>
					</div>
				) : (
					<div className="lg:flex mr-2">
						<NavLink
							to="/login"
							className="btn btn-sm lg:btn-md btn-outline btn-primary mx-2">
							Log In
						</NavLink>
					</div>
				)}
			</div>
		</nav>
	)
}

export default NavBar
