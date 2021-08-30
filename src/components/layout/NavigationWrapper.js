import React from "react";
import Navigation from "../navigation/Navigation";

const NavigationWrapper = ({ children }) => {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
};

export default NavigationWrapper;
