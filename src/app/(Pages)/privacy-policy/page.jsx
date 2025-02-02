"use client"
import Footer from '@/components/footer'
import NavigationBar from '@/components/NavigationBar'
import PrivacyPolicy from '@/components/privacyPolicy'
import WhatsAppButton from '@/components/whatsappbtn'
import { NextSeo } from 'next-seo'
import React from 'react'

export default function PrivaryPolicy() {
  return (
    <>
      
      {typeof window !== "undefined" && (
        <NextSeo
          title="Privacy Policy | DCC Services"
          description="Read the privacy policy of DCC Services to understand how we protect and use your data while providing our services."
          canonical="https://dccservice.in/privacy-policy"
          openGraph={{
            url: "https://dccservice.in/privacy-policy",
            title: "Privacy Policy | DCC Services",
            description:
              "Learn how DCC Services handles your data and privacy when you use our services.",
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
            "@type": "WebPage",
            "name": "Privacy Policy | DCC Services",
            "url": "https://dccservice.in/privacy-policy",
            "logo": "https://dccservice.in/dccimg/logo.png",
            "description":
              "DCC Services' Privacy Policy explaining how we protect user data and privacy.",
            "publisher": {
              "@type": "Organization",
              "name": "DCC Services",
              "logo": "https://dccservice.in/dccimg/logo.png",
            },
          }),
        }}
      />
      <NavigationBar />
      <PrivacyPolicy />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
