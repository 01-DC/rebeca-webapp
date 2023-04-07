import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import ComingSoon from "./pages/ComingSoon"
import Navbar from "./components/shared/Navbar"
import Toast from "./components/shared/Toast"
import Footer from "./components/shared/Footer"
import Events from "./pages/Events"
import Sponsors from "./pages/Sponsors"

function App() {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contactus" element={<ComingSoon />} />
				<Route path="/events" element={<ComingSoon />} />
				<Route path="/schedule" element={<ComingSoon />} />
				<Route path="/sponsors" element={<Sponsors />} />
				<Route path="*" element={<ComingSoon />} />
			</Routes>

			<Toast />
			<Footer />
		</div>
	)
}

export default App