import React from "react";
import SimplebarWrapper from "./components/layout/SimplebarWrapper";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import NavigationWrapper from "./components/layout/NavigationWrapper";
import "simplebar/dist/simplebar.min.css";

const App = () => {
    return (
        <>
            <SimplebarWrapper>
                <Hero />
                <NavigationWrapper>
                    <About />
                </NavigationWrapper>
            </SimplebarWrapper>
        </>
    );
};

export default App;
