import React from "react";

// Import des images
import client1 from "../../assets/client2.jpg"; // Remplacez par le chemin correct
import client2 from "../../assets/client3.jpg"; // Remplacez par le chemin correct
import client333 from "../../assets/client333.jpg"; // Remplacez par le chemin correct
const testimonialData = [
  {
    name: "Salma",
    image: client1,
    description:
      "The technical inspection service was flawless! I received a reminder before the deadline, and everything was done quickly and efficiently.",
    aosDelay: "0",
  },
  {
    name: "Mehdi",
    image: client2,
    description:
      "Thanks to their platform, I renewed my car insurance online without any hassle. Super convenient and saved me from unnecessary fines!",
    aosDelay: "300",
  },
  {
    name: "Amina",
    image: client333,
    description:
      "Professional inspection service with clear maintenance recommendations. I highly recommend it!",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Car owners across Morocco trust our platform for their technical
              inspection, insurance renewal, and vehicle maintenance.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s Testimonial`}
                    className="rounded-full w-20 h-20 object-cover object-center"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{testimonial.description}</p>
                <p className="text-center font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
