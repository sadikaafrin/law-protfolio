import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import ServiceArea from "@/components/ServiceArea";
import TeamProfile from "@/components/TeamProfile";
import AppointmentBooking from "@/components/AppointmentBooking";
import ContactUsButton from "@/components/ContactUsButton";
import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import MemberFrame from "@/components/MemberFrame";

export default function Home() {
  return (
    <div className="">
      <Hero />  
      <AboutUs />
      <ServiceArea />
      <TeamProfile />
      <Gallery />
      <MemberFrame />
      <ContactUsButton />
      <AppointmentBooking />
      {/* <ContactUsButton></ContactUsButton> */}
    </div>
  );
}
