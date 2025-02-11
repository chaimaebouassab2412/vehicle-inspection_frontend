import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import pattern from "../../assets/website/pattern.jpeg";
import womanInspect from "../../assets/womaninspect2.jpg"; // Import image

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <div className="container">
      <div
        className="text-black py-10 sm:min-h-[400px] sm:grid sm:grid-cols-2 items-center rounded-xl gap-4"
        style={bannerImg}
      >
        {/* Left Side - Text and Buttons */}
        <div className="px-6 sm:px-12 space-y-6">
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-4xl font-semibold font-serif text-left"
          >
            Manage Your Car Inspections & Insurance with Ease!
          </h1>
          <p
            data-aos="fade-up"
            className="text-lg text-left text-gray-800 font-medium leading-relaxed"
          >
            Stay on top of your vehicle inspections, insurance renewals, and 
            maintenance schedules. Get automatic reminders and access your car’s 
            full history—all in one place!
          </p>
          <div data-aos="fade-up" className="flex items-center gap-4">
            <a href="#">
              <img
                src={PlayStoreImg}
                alt="Get it on Google Play"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
            <a href="#">
              <img
                src={AppStoreImg}
                alt="Download on the App Store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>

        {/* Right Side - Image (Smaller) */}
        <div className="hidden sm:block flex justify-center" data-aos="fade-left">
          <img
            src={womanInspect}
            alt="Car Inspection"
            className="max-w-[500px] sm:max-w-[400px] h-auto rounded-lg shadow-lg"
          />
          
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
