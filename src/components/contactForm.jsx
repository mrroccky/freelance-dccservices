"use client";
import { useEffect, useState } from 'react';

export default function ContactForm() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (

    <div  className='bg-white '>
      {isClient && (
        <iframe className='bg-white'
          aria-label="Contact DCC Services"
          style={{ height: '1000px', width: '100%', border: 'none' }}
          src="https://forms.zohopublic.in/dccservicesnagpur/form/ContactDCCServices/formperma/bo9Lrj73E4k8jGnUo3KF1PDK-rHNZmcj3MyCTUWOuN0"
        />
      )}
    </div>
  );
}
