import React from "react";
import { TypewriterEffectUse } from "./typewriter_use";

const IWantJob = () => {
  return (
    
    <div  className="bg-white p-6 flex flex-col items-center text-center md:flex-row md:justify-around md:text-left bg-[url('/dccimg/wave.png')] bg-cover bg-center"
    >
      {/* Header Section */}
      <div className="mb-6 md:mb-0 " >
        <h1 className="text-2xl font-bold mb-2 text-gray-700">Redefining Convenience with</h1>
        {/* <p className="text-xl font-medium text-gray-600">
          Connect with us today{" "}
          <span className="text-green-500 font-bold text-3xl underline  ">DCC SERVICES</span>
        </p> */}
        <TypewriterEffectUse/>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Services Card */}
        <div
          className="shadow-lg rounded-lg flex flex-col items-center w-full md:w-64 h-64"
          style={{
            backgroundImage: "url('/dccimg/iwantservices.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          
          <p className="text-lg font-semibold text-white bg-black bg-opacity-50 p-2 rounded mt-auto mb-4 hover:text-green-500  hover:bg-white">
            <a href="/">
            I WANT SERVICES!
             </a>
          </p>
        </div>

        {/* Jobs Card */}
        <div
          className="shadow-lg rounded-lg flex flex-col items-center w-full md:w-64 h-64"
          style={{
            backgroundImage: "url('/dccimg/iwantjob.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-lg font-semibold text-white bg-black bg-opacity-50 p-2 rounded mt-auto mb-4 hover:text-green-500 hover:bg-white ">
            <a href="/careers"> I NEED A JOB!</a>I
          </p>
        </div>
      </div>
    </div>
  );
};



export default IWantJob;
