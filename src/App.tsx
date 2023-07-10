import React from "react";
import { AnimatePresence } from "framer-motion";
// layout
import Layout from "./components/layout";
import Hero from "./sections/hero";
import About from "./sections/about";
import Work from "./sections/work";
import Projects from "./sections/projects";
import Footer from "./sections/footer";

const App = () => {
	
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Footer />
      </AnimatePresence>
    </Layout>
  );
};

export default App;
