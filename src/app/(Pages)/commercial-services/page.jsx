
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

// const services = [
//   { title: "Maids", image: "/domestic/maid.png" },
//   { title: "Cook", image: "/domestic/cook.png" },
//   { title: "Babysitter", image: "/domestic/baby-sitter.png" },
//   { title: "Japa Maid", image: "/domestic/japa-maid.png" },
//   { title: "Driver", image: "/domestic/driver.png" },
//   { title: "Patient Care", image: "/domestic/patient-care.png" },
//   { title: "Elderly Care", image: "/domestic/elderly-care.png" },
// ];

const services = [
  { title: "Office Boy", image: "/commercial/office-boy.png", link: "https://zfrmz.in/KL9Mh4tzIX6f5gq12Ly1" },
  { title: "House Keeping", image: "/commercial/house-keeping.png", link: "https://zfrmz.in/GfCr1TbVi7iuKUfRoYka" },
  { title: "Security Guard", image: "/commercial/security-gaurd.png", link: "https://zfrmz.in/3iIerTEI9kMSxRCfTVOq" },
  { title: "Driver", image: "/commercial/driver.png", link: "https://zfrmz.in/GFRwhR21tVRqYZ3PCvGp" },
];


export default function CommercialServices() {
  return (
    <>

      {typeof window !== "undefined" && (
        <NextSeo
          title="Commercial Services | DCC Services"
          description="Discover professional commercial services including office boys, housekeeping, security guards, and drivers tailored for businesses in Nagpur."
          canonical="https://dccservice.in/commercial-services"
          openGraph={{
            url: "https://dccservice.in/commercial-services",
            title: "Commercial Services | DCC Services",
            description: "Reliable commercial services including office boys, housekeeping, security guards, and drivers for businesses in Nagpur.",
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
            "name": "Commercial Services",
            "description": "Professional commercial services including office boys, housekeeping, security guards, and drivers tailored for businesses.",
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
            Commercial Services
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

