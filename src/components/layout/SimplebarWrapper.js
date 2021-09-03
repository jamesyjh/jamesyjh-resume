import React from "react";
import SimpleBar from "simplebar-react";
import "./scrollbar.css";

const SimplebarWrapper = ({ children }) => {
	return (
		<>
			<SimpleBar
				style={{
					maxHeight: "100vh",
					maxWidth: "100vw",
				}}
			>
				{children}
			</SimpleBar>
		</>
	);
};

export default SimplebarWrapper;
