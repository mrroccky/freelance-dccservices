"use client";
import { TypewriterEffect } from "./typewriter";

export function TypewriterEffectUse() {
  const words = [
    {
        text:"D",
        className: "text-blue-500 dark:text-green-800",
    },
    {
        text:"C",
        className: "text-blue-500 dark:text-green-800",
    },
    {
        text:"C",
        className: "text-blue-500 dark:text-green-800",
    },
    {
      text: "Services.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center ">
      <TypewriterEffect words={words} />
     
    </div>)
  );
}
