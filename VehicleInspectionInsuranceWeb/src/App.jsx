import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./sb-admin-2.min.css";

// User Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Auth from "./components/Auth/Auth";

// Admin Components
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Portal from "./Portal";
import UserCreate from "./UserCreate";
import UserView from "./UserView";
import UserEdit from "./UserEdit";
import CarCreate from "./CarCreate";
import VehicleList from "./CarList";
import UserList from "./UserList";

const App = () => {
  // Dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
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
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar theme={theme} setTheme={setTheme} />

        {/* User Layout */}
        <div className="main-app">
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
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/appstore" element={<AppStoreBanner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth theme={theme} />} />
          </Routes>
        </div>

        {/* Admin Layout */}
        <div className="admin-app">
          <Routes>
            <Route path="/portal" element={<Portal theme={theme} />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="user-list" element={<UserList />} />
              <Route path="create-user" element={<UserCreate />} />
              <Route path="user-view/:id" element={<UserView />} />
              <Route path="user-edit/:id" element={<UserEdit />} />

              <Route path="car-list" element={<VehicleList theme={theme} />} />
              <Route path="create-car" element={<CarCreate theme={theme} />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;