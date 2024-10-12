import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { NavbarStar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardFilm } from "./views/Films";
import { CardPlanet } from "./views/Planets";
import { CardChracter } from "./views/Chracters";
import {CardChracterDetail} from "./views/ChractersDetail";
import { CardVehicle } from "./views/Vehicles";
import { CardFilmDetail } from "./views/FilmsDetail";
import { CardPlanetDetail } from "./views/PlanetsDetail";
import { CardVehicleDetail } from "./views/VehiclesDetail";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarStar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/films" element={<CardFilm />} />
						<Route path="/films/:theid" element={<CardFilmDetail />} />
						<Route path="/chracters" element={<CardChracter />} />
						<Route path="/chracters/:theid" element={<CardChracterDetail />} />
						<Route path="/planets" element={<CardPlanet />} />
						<Route path="/planets/:theid" element={<CardPlanetDetail />} />
						<Route path="/vehicles" element={<CardVehicle />} />
						<Route path="/vehicles/:theid" element={<CardVehicleDetail />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
