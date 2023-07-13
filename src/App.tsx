import React from "react";
import { AnimatePresence } from "framer-motion";
// layout
import Layout from "./components/layout";
import Hero from "./sections/hero";
import About from "./sections/about";
import Work from "./sections/work";
import Projects from "./sections/projects";
import Footer from "./sections/footer";
import ReactGA from "react-ga4";

ReactGA.initialize("G-MZ9KSGS7Y3");

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Footer />
      </Layout>
    </AnimatePresence>
  );
};

export default App;
