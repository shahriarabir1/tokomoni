import Image from "next/image";
import AverageRisksSection from "./components/AverageRisksSection";
import VisionMissionSection from "./components/VisionMissionSection";
import ConnectSection from "./components/ConnectSection";
//import TestimonialSlider from "./components/TestimonialSlider";
import TestimonialCarousel from "./components/TestimonialCarousel";
// import Recognitions from "./components/Recognitions";
import Footer from "./components/Footer";
import SecurityThreats from "./components/SecurityThreats";
import Business from "./components/RegisterPlugin";
// import AdvantagesSection from "./components/AdvantagesSection";
import HeaderSection from "./components/HeaderSection";
import PreventRisk from "./components/PreventRisk";
import Preloader from "./components/Preloader";
import SpiralAnim from "./components/SpiralAnim";
// import { useEffect } from "react";
// import { gsap } from "gsap";
// import SpiralAnim from "./components/SpiralAnim";
// import Demo from "./components/Demo";
export default function Home() {
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".animate-from-top",
  //     { y: -50, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
  //   );
  // }, []);
  return (
    <>
      <Preloader />
      <header className="bg-gray-50 ">
        {/* Navbar */}
        <nav
          dir="rtl"
          className="animate-from-top flex justify-between items-center px-6 py-4 shadow-md border-b-2 sticky top-0 z-[100] bg-white"
        >
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/suidata-logo.svg"
              alt="לוגו של סורידאטה"
              width={150}
              height={40}
            />
          </div>
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#platform" className="hover:text-orange-600">
              פלטפורמה
            </a>
            <a href="#use-cases" className="hover:text-orange-600">
              מקרי שימוש
            </a>
            <a href="#resources" className="hover:text-orange-600">
              משאבים
            </a>
            <a href="#company" className="hover:text-orange-600">
              החברה
            </a>
          </div>
          <button className="bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600">
            בקשת הדגמה
          </button>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none focus:ring"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
        <HeaderSection />
        <PreventRisk />
        <AverageRisksSection />
        <VisionMissionSection />
        <SpiralAnim />
        <ConnectSection />
        {/* <Demo /> */}
        <SecurityThreats />
        <Business />
        <TestimonialCarousel />
        <Footer />
      </header>
    </>
  );
}
