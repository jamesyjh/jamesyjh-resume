import React from "react";
import SimplebarWrapper from "./components/layout/SimplebarWrapper";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Work from "./sections/work/Work";
import NavigationWrapper from "./components/layout/NavigationWrapper";
import "simplebar/dist/simplebar.min.css";

const App = () => {
	return (
		<>
			<SimplebarWrapper>
				<Hero />
				<NavigationWrapper>
					<About />
					<Work />
				</NavigationWrapper>
			</SimplebarWrapper>
		</>
	);
};

export default App;
