import Image from "next/image";
import Merge from "./home/components/Merge";
import AboutSection from "./home/components/About";
import OurParteners from "./home/components/OurParteners";
import Maps from "./home/components/Maps";
import WhyUs from "./home/components/WhyUs";
import Reviews from "./home/components/Reviews";
import Jobs from "./home/components/Jobs";
import Contact from "./home/components/Contact";
import GlobeComponent from "./home/components/GlobeComponent";

export default function Home() {
  return (
    <section className="flex flex-col items-center w-full justify-center gap-[60px] md:gap-[100px] ">
    <Merge />
    <Jobs/>
     <AboutSection />
     <OurParteners />
     <WhyUs/>
     {/* <Maps/> */}
     <GlobeComponent/>
     <Reviews/>
     <Contact />
    </section>
  );
}
