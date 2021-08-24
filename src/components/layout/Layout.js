import React from "react";
import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <div className="container-fluid p-0">{children}</div>
        </>
    );
};

export default Layout;
