import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";

const App = () => {
  // Dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // Dark mode end

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        {/* Navbar is always present */}
        <Navbar theme={theme} setTheme={setTheme} />

        {/* Define routes for different pages */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero theme={theme} />
                <About />
                <Services />
                <Testimonial />
                <AppStoreBanner />
                <Contact />
              </>
            }
          /> {/* Home */}
          <Route path="/about" element={<About />} /> {/* About */}
          <Route path="/services" element={<Services />} /> {/* Services */}
          <Route path="/cars" element={<CarList />} /> {/* Car List */}
          <Route path="/testimonials" element={<Testimonial />} /> {/* Testimonials */}
          <Route path="/appstore" element={<AppStoreBanner />} /> {/* App Store */}
          <Route path="/contact" element={<Contact />} /> {/* Contact */}
          <Route path="/auth" element={<Auth />} /> {/* Login/Signup */}
          <Route path="/auth" element={<Auth theme={theme} />} />

        </Routes>

        {/* Footer is always present */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
