import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutDoctorSection } from "@/components/home/AboutDoctorSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesGridSection } from "@/components/home/ServicesGridSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AppointmentBookingSection } from "@/components/home/AppointmentBookingSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactLocationSection } from "@/components/home/ContactLocationSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. About Dr. Ruchi Goti */}
      <AboutDoctorSection />

      {/* 3. The Jivani Standard (Centralized Auto-Fade Highlight) */}
      <WhyChooseUsSection />

      {/* 4. Treatments & Services */}
      <ServicesGridSection />

      {/* 4. Patient Reviews (Google Reviews) */}
      <TestimonialsSection />

      {/* 6. Appointment Booking (WhatsApp Direct) */}
      <AppointmentBookingSection />

      {/* 7. FAQs */}
      <FaqSection />

      {/* 8. Contact & Location Map */}
      <ContactLocationSection />
    </>
  );
}
