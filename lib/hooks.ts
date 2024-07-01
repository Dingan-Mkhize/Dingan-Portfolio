"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { SectionName } from "./types";
import { useActiveSectionContext } from "@/context/active-section-context";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView, entry } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    console.log(`useSectionInView - ${sectionName}: inView`, inView);
    console.log(`useSectionInView - ${sectionName}: entry`, entry);
    console.log(`useSectionInView - ${sectionName}: ref`, ref);

    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName, entry, ref]);

  return {
    ref,
  };
}






