
import Footer from '@/components/footer'
import NavigationBar from '@/components/NavigationBar'
import WhatsAppButton from '@/components/whatsappbtn'
import React from 'react'
import { NextSeo } from 'next-seo';
export default function career() {
  const jobs = [
    {
      title: "Apply for Domestic Roles", image: "/dccimg/1.png", link: "https://zfrmz.in/EIxXfgGOihO0teGpt3ef",
      points: [
        "Maid",
        "Cook",
        "Baby Sidder",
        "Japa Maid",
        "Driver",
        "Patient Care",
        "Elderly Care",
      ],
    },
    {
      title: "Apply for Commercial Roles", image: "/dccimg/2.png", link: "https://zfrmz.in/cz5G925b2GLEFp07FSFE",
      points: [
        "Office Boy",
        "House Keeping",
        "Security Gaurd",
        "Home Nurce",
      ],
    },
    {
      title: "Apply for Corporate Roles", image: "/dccimg/3.png", link: "https://zfrmz.in/SHCZvroCI7d7r7a3kmyX",
      points: [
        "",
      ],
    },
  ];

  return (
    <>

      {typeof window !== "undefined" && (
        <NextSeo
          title="Careers | DCC Services"
          description="Explore exciting career opportunities at DCC Services. Apply for domestic, commercial, and corporate roles to be a part of our dedicated workforce."
          canonical="https://dccservice.in/careers"
          openGraph={{
            url: "https://dccservice.in/careers",
            title: "Careers | DCC Services",
            description:
              "Join DCC Services and discover career opportunities in domestic, commercial, and corporate sectors.",
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
            "@type": "JobPosting",
            "title": "Various Roles at DCC Services",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "DCC Services",
              "logo": "https://dccservice.in/dccimg/logo.png",
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "India",
              },
            },
            "description":
              "Join our team and explore opportunities in domestic, commercial, and corporate sectors.",
            "employmentType": "Full-Time",
            "datePosted": new Date().toISOString(),
            "validThrough": "2025-12-31",
          }),
        }}
      />
      <NavigationBar />
      <section className="bg-white py-12 px-2 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-black uppercase mb-8">
            DCC Careers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* job Image with Hover Effect */}
                <div className="overflow-hidden">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="h-40 w-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* job Title */}
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold text-green-800">
                    {job.title}
                  </h3>

                  {/* Button with Link */}
                  <a href={job.link} target="" rel="noopener noreferrer">
                    <button className="mt-2 bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 transition">
                      Apply Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
