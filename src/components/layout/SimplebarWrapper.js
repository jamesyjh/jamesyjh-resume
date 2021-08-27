import React from "react";
import SimpleBar from "simplebar-react";
import "./scrollbar.css";

const SimplebarWrapper = ({ children }) => {
    return (
        <>
            <SimpleBar style={{ maxHeight: "100vh" }}>{children}</SimpleBar>
        </>
    );
};

export default SimplebarWrapper;
