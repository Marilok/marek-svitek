"use client";

import { HeroSection } from "../components/hero/HeroSection";
import { AboutSection } from "../components/about/AboutSection";
import { ProjectsSection } from "../components/projects/ProjectsSection";
import { AcademicSection } from "../components/academic/AcademicSection";
import { NotesSection } from "../components/notes/NotesSection";
import { ContactSection } from "../components/contact/ContactSection";
import { NavigationButtons } from "../components/NavigationButtons";
import { useNavigation } from "../components/useNavigation";

export default function Home() {
  const { scrollToSection } = useNavigation();

  return (
    <main className="snap-y snap-mandatory overflow-y-auto h-screen **:transition-all **:duration-200 bg-blue-50 text-blue-950 relative">
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <AcademicSection />
      <NotesSection />
      <ContactSection />
      <NavigationButtons />
    </main>
  );
}
