import React from "react";
import inspectionIcon from "../../assets/inspection.jpeg"; 
import maintenanceIcon from "../../assets/maintenance.jpg";
import insuranceIcon from "../../assets/insurance.jpeg";

const inspectionServices = [
  {
    name: "Full Technical Inspection",
    price: "From $50",
    image: inspectionIcon,
    aosDelay: "0",
  },
  {
    name: "Emissions Test & Safety Check",
    price: "From $40",
    image: maintenanceIcon,
    aosDelay: "500",
  },
  {
    name: "Insurance Validation & Renewal",
    price: "Varies by Provider",
    image: insuranceIcon,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Our Vehicle Inspection Services
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          We provide certified technical inspections, emissions tests, and insurance validation services. Ensure your vehicle is road-ready and compliant with all legal requirements.
        </p>
        
        {/* Service Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {inspectionServices.map((service) => (
            <div
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              <div className="w-full h-[120px]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-primary font-semibold">{service.name}</h1>
                <div className="flex justify-between items-center text-xl font-semibold">
                  <p>{service.price}</p>
                  <a href="#">Check Service</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action Button */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Book an Inspection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
