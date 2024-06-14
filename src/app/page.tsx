import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestomonialCard from "@/components/TestomonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import UpcomingWebinars from "../components/UpcomingWebinars";
import Instructor from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center ">chai aur code</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestomonialCard />
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </main>
  );
}
