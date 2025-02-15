import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarPng from "../../assets/car1.png";

const About = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume false as default
  const navigate = useNavigate();

  // Simulate checking if the user is logged in (use actual logic here)
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Check for auth token in localStorage or any storage
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate("/portal/dashboard"); // Redirect to dashboard
    } else {
      navigate("/auth"); // Redirect to login form
    }
  };

  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                Welcome to Car Inspection
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Manage vehicle inspections, insurance, and maintenance easily.
              </p>
              <ul
                data-aos="fade-up"
                className="list-disc pl-6 leading-8 tracking-wide"
              >

                <li>Track maintenance schedules and deadlines to keep your car running smoothly.</li>
              </ul>
              <p data-aos="fade-up">
                With <strong>Car Inspection</strong>, you can focus on the road while we handle the rest.
              </p>
              <button
                data-aos="fade-up"
                className="button-outline bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 duration-300"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
