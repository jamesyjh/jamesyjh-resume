import React from "react";
import SimplebarWrapper from "./components/layout/SimplebarWrapper";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Work from "./sections/work/Work";
import NavigationWrapper from "./components/layout/NavigationWrapper";
import "simplebar/dist/simplebar.min.css";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

const App = () => {
	return (
		<>
			<SimplebarWrapper>
				<Hero />
				<NavigationWrapper>
					<About />
					<Work />
					<Projects />
				</NavigationWrapper>
				<Footer />
			</SimplebarWrapper>
		</>
	);
};

export default App;
