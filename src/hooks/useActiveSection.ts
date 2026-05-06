"use client";

import { useEffect, useRef, useState } from "react";

interface UseActiveSectionOptions {
  enabled?: boolean;
  rootMargin?: string;
  threshold?: number[];
}

const DEFAULT_THRESHOLD = [0, 0.25, 0.5, 0.75, 1];

export function useActiveSection(
  sectionIds: string[],
  {
    enabled = true,
    rootMargin = "-40% 0px -60% 0px",
    threshold = DEFAULT_THRESHOLD,
  }: UseActiveSectionOptions = {}
) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const currentSectionRef = useRef(sectionIds[0] ?? "");

  useEffect(() => {
    if (!enabled) return;

    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sectionElements.length === 0) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length === 0) return;

        const mostVisible = visibleSections.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b
        );
        const nextId = mostVisible.target.id;

        if (nextId !== currentSectionRef.current) {
          currentSectionRef.current = nextId;
          setActiveSection(nextId);
        }
      },
      { rootMargin, threshold }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [enabled, rootMargin, sectionIds, threshold]);

  return activeSection;
}
