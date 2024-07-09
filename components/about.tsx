"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  console.log("useSectionInView hook:", useSectionInView);
  console.log("SectionHeading component:", SectionHeading); 

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  My journey into the world of programming began in the most unexpected way. With a background in <span className="font-medium">screenwriting</span>, I found myself immersed in the art of storytelling and narrative. By chance, a colleague and I embarked on a quest to build an app for filmmakers. As I dabbled in <span className="font-medium">basic coding</span> to bring our vision to life, I stumbled upon a new passion that rivaled my love for storytelling: <span className="font-medium">programming</span>. Although the app didn't pan out, it sparked a new fire in me. Now, I strive to marry my two passions, using my experience in structure and narrative to create <span className="font-medium">websites that tell visual stories</span> built with <span className="font-medium">solid code</span>.
</p>
<p className="mb-3">
  Now, with my extensive training as a full stack engineer through OpenClassrooms, I am revisiting the dream of creating a transformative app for screenwriters. Leveraging the power of AI, I'm developing a <span className="font-medium">script structure app</span> designed to assist my fellow screenwriters in crafting compelling narratives. This new venture combines my love for storytelling with the technical prowess I've acquired, aiming to provide an invaluable tool for the film industry.
</p>
    </motion.section>
  );
}