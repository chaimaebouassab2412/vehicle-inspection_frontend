import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import carPng from "../../assets/car1.jpg";
import yellowCar from "../../assets/new-peugeot-208-14.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ theme }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="pt-4 dark:bg-black dark:text-white duration-300 w-full overflow-hidden">
      <div className="w-screen min-h-[620px] flex px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-once="true"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 max-w-full max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.30)] sm:translate-x-12"
            />
          </div>
          <div className="space-y-6 order-2 sm:order-1 sm:pr-32">
            <p
              data-aos="fade-up"
              className="text-[#0092b1] text-3xl font-serif tracking-wide"
            >
              Simplified
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl lg:text-5xl font-extrabold font-sans leading-tight text-gray-800 dark:text-white"
            >
              Car Management & Insurance
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-lg text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed"
            >
              A complete solution for vehicle owners, ensuring hassle-free technical
              inspections, insurance renewals, and maintenance tracking.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="600"
              onClick={() => {
                navigate("/auth"); // Navigate to the /auth page
              }}
              className="rounded-md bg-[#0092b1] hover:bg-[#007a91] transition duration-500 py-3 px-8 text-white text-lg font-medium shadow-lg hover:shadow-xl"
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
