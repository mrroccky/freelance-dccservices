"use client";
import React from "react";
import SparklesUse from "@/components/sparkles_use";
// import ContainerScrollUse from "@/components/containerScroll_use";
// import { CardHoverUse } from "@/components/cardHover_use";
import ServiceCard from "@/components/serviceCard";
import SwiperSlider from "@/components/sliderComponent";
import KnowUs from "@/components/knowusComponent";
import NavigationBar from "@/components/NavigationBar";
import TestimonialComponent from "@/components/testimonialComponent";
import OurClients from "@/components/ourClients";
// import FeedbackForm from "@/components/contactUsComponent";
import ContactUsComponent from "@/components/contactUsComponent";
import Accordion from "@/components/accordian";
import Footer from "@/components/footer";
// import PrivacyPolicy from "@/components/privacyPolicy";
import HowWeWork from "@/components/howWeWork";
// import TermsAndConditionsComponent from "@/components/termsAndConditionsComponent";
import Management from "@/components/managment";
import WhyChooseUs from "@/components/whyChooseUs";
import WhatsAppButton from "@/components/whatsappbtn";
import { NextSeo } from "next-seo";
import IWantJob from "@/components/iwant_job";
import Products from "@/components/products";
// import { HeroParallaxUse } from "@/components/heroparallax-use";

export default function Page() {
  return (
    <>
    
      {typeof window !== "undefined" && (
        <NextSeo
          title="DCC Services | Home"
          description="Vidharbhas No.1 HR solution, We provide professional services for our clients tailored according to their needs ..."
          canonical="https://dccservice.in"
          openGraph={{
            url: "https://dccservice.in",
            title: "DCC Services",
            description: "We provide professional HR services for ...",
            images: [
              {
                url: "https://dccservice.in/dccimg/logo.png",
                width: 1200,
                height: 630,
                alt: "DCC Services Logo",
              },
            ],
          }}
        />
      )}
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DCC Services",
            "url": "https://dccservice.in",
            "logo": "https://dccservice.in/dccimg/logo.png",
            "description": "Vidharbhas No.1 HR solution, We provide professional services for our clients tailored according to their needs ...",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9307667930",
              "contactType": "Customer Service",
            },
          }),
        }}
      />
      <h1 className="hidden">DCC Services:Maid,Baby Sitter,Japa Maid,Cook, Nurse and all HR Solutions and Professional Services in Nagpur</h1>
      <NavigationBar />
      <SwiperSlider />
      <SparklesUse />
      <KnowUs />
      <ServiceCard />
      <Products />
      <OurClients />
      <TestimonialComponent />
      <WhyChooseUs />
      <ContactUsComponent />
      <Management />
      <HowWeWork />
      <Accordion />
      <IWantJob />
      <Footer />
      <WhatsAppButton />
      {/* <HeroParallaxUse/> */}
      {/* <PrivacyPolicy/> */}
      {/* <TermsAndConditionsComponent/> */}
      {/* <BeamsUse title={"About Us"} description={"hwllo"}/> */}
      {/* <ContainerScrollUse/> */}
      {/* <CardHoverUse/> */}
    </>
  );
}
