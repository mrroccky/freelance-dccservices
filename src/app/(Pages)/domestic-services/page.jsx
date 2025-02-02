
"use client";
import Accordion from "@/components/accordian";
import Footer from "@/components/footer";
import HowWeWork from "@/components/howWeWork";
import IWantJob from "@/components/iwant_job";
import NavigationBar from "@/components/NavigationBar";
import Products from "@/components/products";
import WhatsAppButton from "@/components/whatsappbtn";
import WhyChooseUs from "@/components/whyChooseUs";
import { NextSeo } from "next-seo";
import React from "react";

const services = [
  { title: "Maid", image: "/domestic/maid.png", link: "https://zfrmz.in/WTqe3wlTrGvemNc9UQ0f" },
  { title: "Cook", image: "/domestic/cook.png", link: "https://zfrmz.in/drpBKtyuY3vlTiepo4n1" },
  { title: "Babysitter", image: "/domestic/baby-sitter.png", link: "https://zfrmz.in/eTA5sBmBzpGMT6TzVQYP" },
  { title: "Japa Maid", image: "/domestic/japa-maid.png", link: "https://zfrmz.in/gLpMXoMqWE9ynoDrguJM" },
  { title: "Driver", image: "/domestic/driver.png", link: "https://zfrmz.in/2FrUh5tplRryWgWGowEH" },
  { title: "Patient Care", image: "/domestic/patient-care.png", link: "https://zfrmz.in/9THxKw2SnJoN98Pw5Mp0" },
  { title: "Elderly Care", image: "/domestic/elderly-care.png", link: "https://zfrmz.in/qQfc7KV03w6TbGuJLI7O" },
  { title: "Home Nurse", image: "/domestic/home-nurce.png", link: "https://zfrmz.in/TI5kxHhjtQMSpEvORoET" },
];


// const services = [
//   { title: "Office Boy", image: "/office-boy.jpg" },
//   { title: "House Keeping", image: "/house-keeping.jpg" },
//   { title: "Security Gaurd", image: "/security-gaurd.jpg" },
//   { title: "Home Nurce", image: "/home-nurce.jpg" },
// ];

export default function DomesticServices() {
  return (
    <>
     {typeof window !== "undefined" && (
       <NextSeo
       title="Domestic Services | DCC Services"
       description="Explore a range of domestic services including maids, cooks, babysitters, patient care, and more. Tailored solutions for your home needs in Nagpur."
       canonical="https://dccservice.in/domestic-services"
       openGraph={{
         url: "https://dccservice.in/domestic-services",
         title: "Domestic Services | DCC Services",
         description: "Professional domestic services including maids, cooks, babysitters, and more in Nagpur.",
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
            "@type": "Service",
            "name": "Domestic Services",
            "description": "Comprehensive domestic services including maids, cooks, babysitters, and patient care.",
            "provider": {
              "@type": "Organization",
              "name": "DCC Services",
              "url": "https://dccservice.in",
              "logo": "https://dccservice.in/dccimg/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9307667930",
                "contactType": "Customer Service",
              },
            },
            "areaServed": "Nagpur, India",
            "offers": services.map((service) => ({
              "@type": "Offer",
              "name": service.title,
              "url": service.link,
              "image": `https://dccservice.in${service.image}`,
            })),
          }),
        }}
      />
      <NavigationBar />
      <section className="bg-white py-12 px-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-black uppercase mb-8">
            Domestic Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Service Image with Hover Effect */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-40 w-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Service Title */}
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold text-green-800">
                    {service.title}
                  </h3>
                  {/* Book Now Button */}
                  <a href={service.link}>
                    <button className="mt-2 bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 transition">
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Products />
      <HowWeWork />
      <WhyChooseUs />
      <Accordion />
      <IWantJob />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

