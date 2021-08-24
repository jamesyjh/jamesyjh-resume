import React from "react";
import Layout from "./components/layout/Layout";
import About from "./sections/about/About";
import "./App.css";

const App = () => {
    return (
        <>
            <Layout>
                <About />
            </Layout>
        </>
    );
};

export default App;
