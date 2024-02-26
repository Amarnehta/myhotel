// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import Cardcomponent from './components/cards';
import Slider from './components/Slider';
import ContactForm from './components/contact';
import Footer from './components/footer';
import BookingForm from './components/Bookingform';
import Servicescomponent from './components/services';
import Aboutcomponent from './components/about';

import LoginPopup from './components/loginpop';
const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Slider />
      <BookingForm />
      <Cardcomponent />
      <Servicescomponent />
      <Aboutcomponent />
      <ContactForm />
      <Routes>
        <Route path="/loginpop" element={<LoginPopup />} />

      </Routes>




      <Footer />
    </Router>
  );
};

export default App;
