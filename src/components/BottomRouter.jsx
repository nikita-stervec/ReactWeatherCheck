import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx"
import About from "./About.jsx";
import Weather from "./Weather.jsx";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FloodIcon from '@mui/icons-material/Flood';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import InfoIcon from '@mui/icons-material/Info';

function BottomRouter() {
	const [value, setValue] = useState(0);

	return (
		<Router>
			<div style={{ height: "95vh" }}>
				<BottomNavigation
					style={{ position: "absolute", left: "0", bottom: "0", height: "75px", width: "100%" }}
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction label="Home" icon={<SavedSearchIcon />} component={Link} to="/" />
					<BottomNavigationAction label="Weather" icon={<FloodIcon />} component={Link} to="/weather" />
					<BottomNavigationAction label="About" icon={<InfoIcon />} component={Link} to="/about" />
				</BottomNavigation>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/weather" element={<Weather />} />
				</Routes>
			</div>
		</Router>
	);
}

export default BottomRouter;