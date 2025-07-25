"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AbtImage from "../assets/AboutUs.jpg"; // Adjust the path as necessary
import ParallaxImage from "./ParallaxImage";
import PhotoOne from "../assets/AbtOne.jpg"; // Adjust the path as necessary
import PhotoTwo from "../assets/AbtTwo.jpg"; // Adjust the path as necessary


const imageList = [PhotoOne.src, PhotoTwo.src];

const AboutSection = () => {
  return (
    <section id="about" className=" bg-white ">
      <div className="max-w-7xl mx-auto w-11/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center">
          {/* Left Image with Animation */}
          {/* <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src={AbtImage}
              alt="Yacht with containers"
              width={800}
              height={400}
              className="w-full max-h-[600px] h-auto object-cover rounded-xl"
            />
          </motion.div> */}

          <div className="relative ">
            {/* Main Image */}
            <div
              className="relative overflow-hidden"
              style={{ height: "450px" }}
            >
              {/* <Image
                src="/assets/WhyImage.png"
                alt="Professional worker with hard hat holding tablet, representing quality job opportunities"
                width={505}
                height={550}
                className="w-full h-auto object-cover"
                priority
              /> */}
              <ParallaxImage images={imageList} duration={2} />
            </div>
          </div>

          {/* Right Text Content with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-3xl font-bold font-oswald text-gray-900 mb-8">
              WHO WE ARE
            </h3>
            <p className="text-gray-700 text-[18px] leading-[150%] mb-4">
              At BEMYHR, we’ve successfully placed over 10,000 candidates in
              global roles across hospitality, cruise lines, oil & gas, and
              technical sectors for more than 15 years. We connect skilled
              professionals with the right international opportunities, ensuring
              alignment in both talent and expectations. Our experienced team
              partners with trusted employers to deliver placements marked by
              transparency, care, and long-term career growth.
            </p>
            <p className="text-gray-700 text-[18px] leading-[150%] mb-6">
              Beyond recruitment, we provide complete support — including
              pre-departure guidance, skill assessments, soft-skills training,
              and language orientation. Our ethical approach and personalized
              process have earned the trust of both our candidates and global
              partners. As the global job market evolves, BEMYHR continues to
              empower individuals from diverse backgrounds with real chances to
              grow their careers abroad and build meaningful futures.
            </p>
            {/* <p className="text-gray-700 mb-6">
              With a work force of 100 plus professionals and over 100 owners to serve crew change support, many supply boats to serve vessels on anchorage, we enjoy the best infrastructure and fleets to excel and penetrate our growth.
            </p>  */}
            <Link
              href="https://wa.me/919594465739"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-blue-600 text-gray-700 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition">
                CONTACT US
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
