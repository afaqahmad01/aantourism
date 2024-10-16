import React from "react";
import Header from "./components/Header/";
import ActivityDetails from "./components/ActivityDetail.js";
import ImageGallery from "./components/ImageGallery/";
import ReviewSection from "./components/ReviewSection/";
import SidePanel from "./components/SidePanel/";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="activity">
				<ActivityDetails />
			</div>
			<main className="main-content">
				<section className="left-section">
					<ImageGallery />
					<div className="desktop-view">
						<ReviewSection />
					</div>
				</section>
				<SidePanel />
				<div className="mobile-view">
					<ReviewSection />
				</div>
			</main>
		</div>
	);
}

export default App;
