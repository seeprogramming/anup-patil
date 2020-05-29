import React from "react";

import Layout from "./components/Layout/Layout";
import Slider from "./components/UI/Slider/Slider";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Resume from "./components/Sections/Resume/Resume";
import Hobbies from './components/Sections/Hobbies/Hobbies'
import Blog from './components/Sections/Blog/Blog'
import ContactMe from './components/Sections/ContactMe/ContactMe'
import Footer from './components/Sections/Footer/Footer'

function App() {
  return (
    <Layout>
      <Slider />
      <AboutMe />
      <Resume />
      <Hobbies/>
      <Blog/>
      <ContactMe/>
      <Footer/>
    </Layout>
  );
}

export default App;
