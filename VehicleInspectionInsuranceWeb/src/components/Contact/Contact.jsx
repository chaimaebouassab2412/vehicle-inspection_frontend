import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Ensure Your Vehicle is Road-Ready with Our Expert Services!
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed">
                ⭐ Book your <span className="text-primary font-semibold">technical inspection</span>,  
                <span className="text-primary font-semibold"> insurance renewal</span>, or  
                <span className="text-primary font-semibold"> maintenance reminders</span>  with us .
                   Stay compliant and stress-free with our trusted vehicle management platform. ⭐
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href="/contact"
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase "
              >
                Book an Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
