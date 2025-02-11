import React from "react";
import { FaClipboardCheck } from "react-icons/fa"; // Technical Inspection
import { GiAutoRepair } from "react-icons/gi"; // Maintenance Alerts
import { MdPayment } from "react-icons/md"; // Secure Payments

const servicesData = [
  {
    name: "Certified Technical Inspections",
    icon: (
      <FaClipboardCheck className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Ensure your vehicle meets safety and emission standards with our certified inspections.",
    aosDelay: "0",
  },
  {
    name: "Automated Maintenance Alerts",
    icon: (
      <GiAutoRepair className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Never miss an oil change or check-up! Get automated reminders for upcoming maintenance.",
    aosDelay: "500",
  },
  {
    name: "Secure Insurance Payments",
    icon: (
      <MdPayment className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Easily verify and pay your vehicle insurance through our secure online platform.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us?
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicesData.map((service) => (
              <div
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{service.icon}</div>
                <h1 className="text-2xl font-bold">{service.name}</h1>
                <p>{service.description}</p>
                <a
                  href={service.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
