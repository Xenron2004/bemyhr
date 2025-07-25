"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";




const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar, Mumbai",
    text: "Thanks to BEMYHR, I’m now working on a luxury cruise ship. The process was smooth, and they helped at every step.",
    color: "teal",
  },
  {
    id: 2,
    name: "Nazia Shaikh, Hyderabad",
    text: "I never thought I’d work abroad. Be My HR helped me secure a job in Dubai’s hotel industry with great pay.",
    color: "purple",
  },
  {
    id: 3,
    name: "Ajay Prasad, Vizag",
    text: "I joined the oil & gas sector in Qatar through them. Got full support with visa, training, and interview prep.",
    color: "orange",
  },
  {
    id: 4,
    name: "Sumanth Reddy, Bengaluru",
    text: "Placed in Singapore as a steward. BEMYHR truly changed my life!",
    color: "teal",
  },
  {
    id: 5,
    name: "Deepak Sharma, Jaipur",
    text: "Their placement guarantee is real! I’m now earning in USD and supporting my family back home.",
    color: "purple",
  },
  {
    id: 6,
    name: "Pooja Mishra, Lucknow",
    text: "100% transparency. No hidden fees. Genuine consultancy for abroad jobs.",
    color: "orange",
  },
  {
    id: 7,
    name: "Sahil Khan, Goa",
    text: "I got placed in a cruise line job within 3 weeks of applying!",
    color: "teal",
  },
  {
    id: 8,
    name: "Ashwini Rao, Pune",
    text: "I was trained and guided throughout. Got placed in Oman in a top hotel.",
    color: "purple",
  },
  {
    id: 9,
    name: "Rahul Dey, Kolkata",
    text: "Even after placement, their team stays in touch to support us. Very helpful.",
    color: "orange",
  },
  {
    id: 10,
    name: "Manasa K, Chennai",
    text: "BEMYHR is the best if you want international exposure in hospitality.",
    color: "teal",
  },
];


const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get testimonials for current slide
  const visibleTestimonials = testimonials.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  const getColorClasses = (color) => {
    switch (color) {
      case 'teal':
        return {
          bg: 'bg-teal-500',
          text: 'text-teal-500',
          dot: 'bg-teal-500'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          text: 'text-purple-500',
          dot: 'bg-purple-500'
        };
      case 'orange':
        return {
          bg: 'bg-orange-500',
          text: 'text-orange-500',
          dot: 'bg-orange-500'
        };
      default:
        return {
          bg: 'bg-gray-500',
          text: 'text-gray-500',
          dot: 'bg-gray-500'
        };
    }
  };

  return (
    <section id="reviews" className="max-w-[1280px] w-11/12 mx-auto py px-4">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center justify-center  mb-12">
        <h2 className="text-[36px] font-bold text-gray-900 mb-4 leading-tight">
          Student's Testimonials
        </h2>
        <p className="text-[17px] text-gray-600 leading-relaxed max-w-2xl">
          Read what our placed candidates have to say about the support, guidance, and life-changing opportunities they received from BEMYHR.
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="w-full overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {visibleTestimonials.map((testimonial, index) => {
              const colorClasses = getColorClasses(testimonial.color);
              
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className={`w-10 h-10 ${colorClasses.bg} rounded-full flex items-center justify-center`}>
                      <FaQuoteLeft className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-[16px] leading-relaxed mb- min-h-[120px]">
                    {testimonial.text}
                  </p>

                  {/* Color Dot */}
                  {/* <div className="flex justify-center mb-6">
                    <div className={`w-2 h-2 ${colorClasses.dot} rounded-full`}></div>
                  </div> */}

                  {/* Author Info */}
                  <div className="flex flex-col items-start text-center">
                    <div className="relative mb-4">
                      {/* <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover border-4 border-gray-100"
                      /> */}
                      {/* Small colored circle on avatar */}
                      {/* <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${colorClasses.bg} rounded-full border-2 border-white flex items-center justify-center`}>
                        <FaQuoteLeft className="w-2 h-2 text-white" />
                      </div> */}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-[18px] mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-[14px]">
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative w-3 h-3 rounded-full focus:outline-none transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="absolute inset-0 bg-gray-300 rounded-full" />
              <motion.span
                className="absolute inset-0 bg-blue-600 rounded-full"
                initial={false}
                animate={{
                  scale: currentSlide === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;