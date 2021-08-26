import React from "react";
import Layout from "./components/layout/Layout";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
// import "./App.css";

const App = () => {
    return (
        <>
            <Layout>
                <Hero />
                <About />
            </Layout>
        </>
    );
};

export default App;
