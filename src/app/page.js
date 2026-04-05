import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import ServiceArea from "@/components/ServiceArea";
import TeamProfile from "@/components/TeamProfile";
import AppointmentBooking from "@/components/AppointmentBooking";
import ContactUsButton from "@/components/ContactUsButton";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />  
      <AboutUs />
      <ServiceArea />
      <TeamProfile />
      <AppointmentBooking />
      {/* <ContactUsButton></ContactUsButton> */}
    </div>
  );
}
