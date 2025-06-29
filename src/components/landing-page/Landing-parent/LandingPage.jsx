import React from 'react'
import Header from '../Header.jsx';
import Details from '../Details.jsx';
import Services from '../Services.jsx';
import Reviews from '../Reviews.jsx';
import About from '../About.jsx';
import Footer from '../Footer.jsx';
import Contact from '../Contact.jsx';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Details />
      <Services />
      <About />
      <Reviews />
      <Contact/>
      <Footer />
    </div>
  );
}

export default LandingPage
