import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import carPng from "../../assets/car1.jpg";
import yellowCar from "../../assets/new-peugeot-208-14.jpg";
import AOS from "aos";

const Hero = ({ theme }) => {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    AOS.refresh();
  });

  return (
<div className="dark:bg-black dark:text-white duration-300 w-full overflow-hidden">
<div className="w-screen min-h-[620px] flex px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 max-w-full max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] sm:translate-x-12"
              />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Simplified
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Management & Insurance
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              A complete solution for vehicle owners, ensuring hassle-free
              technical inspections, insurance renewals, and maintenance
              tracking
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                navigate("/auth"); // Navigate to the /auth page
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Manage My Vehicle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
