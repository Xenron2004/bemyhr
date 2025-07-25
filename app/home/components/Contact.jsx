
import React from "react";
// import ContactForm from './ContactForm'
import ContactCard from "./ContactCard";
import { MdCall, MdEmail, MdMessage, MdWhatsapp } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

// const contactCardData = [
//   {
//     icon: <MdCall size={20} color="#004AAD" />, // Example icon
//     heading: "Contact Us",
//     bodyText:
//       "Give us a call to explore the possibilities and start a meaningful partnership.",
//     links: [{ text: "Call: +91 9594465739", url: "tel:+91 9594465739" }],
//     iconBgColor: "",
//   },
//   {
//     icon: <MdEmail size={20} color="#F88311" />, // Example icon
//     heading: "Email Us",
//     bodyText: "Connect with us easily through email communication",
//     links: [
//       {
//         text: "info@bemyhr.in",
//         url: "mailto:info@bemyhr.in",
//       },
//     ],
//     iconBgColor: "",
//   },
//   {
//     icon: <FaBuilding size={20} color="#41B93D" />, // Example icon
//     heading: "Visit Us",
//     bodyText: "Visit our location for an up-close look at our offerings.",
//     links: [
//       {
//         text: "Be My HR ",
//         url: "https://maps.app.goo.gl/WAjk9sAX51PPtKCX8",
//       },
//     ],
//     iconBgColor: "",
//   },
// ];

const contactCardData = [
  {
    icon: <MdCall size={20} color="#4B88FF" />,
    heading: "Contact Us",
    bodyText: "Give us a call to explore the possibilities and start a meaningful partnership.",
    links: [{ text: "Call: +91 9594465739", url: "tel:+91 9594465739" }],
    hoverColor: "#004AAD"
  },
  {
    icon: <MdEmail size={20} color="#F88311" />,
    heading: "Email Us",
    bodyText: "Connect with us easily through email communication",
    links: [{ text: "jobs@bemyhr.in", url: "mailto:jobs@bemyhr.in" }],
    hoverColor: "#F88311"
  },
  {
    icon: <FaBuilding size={20} color="#41B93D" />,
    heading: "Visit Us",
    bodyText: "Visit our location for an up-close look at our offerings.",
    links: [{ text: "BEMYHR", url: "https://maps.app.goo.gl/WAjk9sAX51PPtKCX8" }],
    hoverColor: "#41B93D"
  }
];



const Contact = () => {
  return (
    <section id="contact">
      <div className="flex max-w-[1280px] w-full items-start justify-start h-auto flex-col">
        <div className="flex flex-col md:flex-row max-w-[1280px] gap-y-[56px] w-full px-4 items-start justify-start gap-x-[94px] h-auto">
          {/* left section */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-3xl font-semibold font-ProximaNova text-bodyText mb-2">
                Get in Touch with Us!
              </h2>
              <p className="text-lg font-montserrat mb-10 text-gray-600">
                Reach out to us for inquiries, support, or feedback. We're here
                to help.
              </p>
            </div>
            <div className="flex flex-col gap-4  items-start justify-start">
              {contactCardData.map((card, index) => (
                <ContactCard
                  key={index}
                  icon={card.icon}
                  heading={card.heading}
                  bodyText={card.bodyText}
                  links={card.links}
                  iconBgColor={card.iconBgColor}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl mb-2 font-semibold font-montserrat text-bodyText">
                Office Address:
              </h2>
              <p className="text-md font-montserrat mb-4 text-gray-600">
                Address: 1st floor, Sri Venkateswara Towers, Door No. 47, 3-31,
                opp. Subbayya Gari Hotel, Dwaraka Nagar, Visakhapatnam, Andhra
                Pradesh 530016
              </p>
            </div>
            <div className="w-full max-w-[700px] h-[550px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.2973438297017!2d83.304507!3d17.72886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQzJzQzLjkiTiA4M8KwMTgnMTYuMiJF!5e1!3m2!1sen!2sin!4v1749817946445!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          {/* <ContactForm/> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
