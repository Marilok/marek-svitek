"use client";

import { useState, useEffect, useMemo } from "react";

export function useNavigation() {
  const sections = useMemo(
    () => ["hero", "about", "projects", "academic", "notes", "contact"],
    []
  );

  const [showButton, setShowButton] = useState(false);
  const [isOnContact, setIsOnContact] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    // Update URL hash
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  const scrollToNextSection = () => {
    const nextIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    scrollToSection(sections[nextIndex]);
  };

  const scrollToPreviousSection = () => {
    const prevIndex = Math.max(currentSectionIndex - 1, 0);
    scrollToSection(sections[prevIndex]);
  };

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
        if (entry.isIntersecting) {
          setCurrentSectionIndex(0);
          // Update URL hash when hero comes into view
          if (window.location.hash !== "#hero") {
            window.history.replaceState(null, "", "#hero");
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnContact(entry.isIntersecting);
        if (entry.isIntersecting) {
          setCurrentSectionIndex(sections.length - 1);
          // Update URL hash when contact comes into view
          if (window.location.hash !== "#contact") {
            window.history.replaceState(null, "", "#contact");
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, [sections.length]);

  // Track other sections
  useEffect(() => {
    const sectionObservers = sections.slice(1, -1).map((sectionId, index) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSectionIndex(index + 1); // +1 because we skip hero (index 0)
            // Update URL hash when section comes into view
            if (window.location.hash !== `#${sectionId}`) {
              window.history.replaceState(null, "", `#${sectionId}`);
            }
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      sectionObservers.forEach((observer) => observer?.disconnect());
    };
  }, [sections]);

  // Handle initial hash on page load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && sections.includes(hash)) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(hash);
        setCurrentSectionIndex(sections.indexOf(hash));
      }, 100);
    }
  }, [sections]);

  return {
    sections,
    scrollToSection,
    showButton,
    isOnContact,
    scrollToNextSection,
    scrollToPreviousSection,
  };
}
