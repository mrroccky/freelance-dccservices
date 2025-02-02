"use client";
import React from 'react'
import Footer from '@/components/footer'
import NavigationBar from '@/components/NavigationBar'
import ContactUsComponent from '@/components/contactUsComponent'
import SwiperSlider from '@/components/sliderComponent';
import ContactForm from '@/components/contactForm';
import WhatsAppButton from '@/components/whatsappbtn';
import { NextSeo } from 'next-seo';

export default function ContactUs() {
  return (
    <>
     {typeof window !== "undefined" && (
        <NextSeo
          title="Contact Us | DCC Services"
          description="Get in touch with DCC Services. We are here to assist you with your inquiries. Reach out for domestic, commercial, and corporate services."
          canonical="https://dccservice.in/contact-us"
          openGraph={{
            url: "https://dccservice.in/contact-us",
            title: "Contact Us | DCC Services",
            description:
              "Contact DCC Services for any inquiries about our domestic, commercial, and corporate services.",
            images: [
              {
                url: "https://dccservice.in/dccimg/logo.png",
                width: 1200,
                height: 630,
                alt: "DCC Services logo",
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
            "@type": "ContactPage",
            "name": "Contact Us | DCC Services",
            "url": "https://dccservice.in/contact-us",
            "logo": "https://dccservice.in/dccimg/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9307667930",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": "English",
            },
          }),
        }}
      />
      <NavigationBar />
      <SwiperSlider />
      <ContactForm />
      <ContactUsComponent />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
