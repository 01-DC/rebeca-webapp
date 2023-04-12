import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import ComingSoon from "./pages/ComingSoon"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"
import Events from "./pages/Events"
import EventSingle from "./pages/EventSingle"
import Sponsors from "./pages/Sponsors"
import OurTeam from "./pages/OurTeam"
import Schedule from "./pages/Schedule"

function App() {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/events/:id" element={<EventSingle />} />
				<Route path="/ourteam" element={<OurTeam />} />
				<Route path="/rebnights" element={<ComingSoon />} />
				<Route path="/schedule" element={<Schedule />} />
				<Route path="/sponsors" element={<Sponsors />} />
				<Route path="*" element={<ComingSoon />} />
			</Routes>

			<Footer />
		</div>
	)
}

export default App
