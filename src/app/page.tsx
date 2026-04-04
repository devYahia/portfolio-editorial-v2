import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <div className="line-accent" />
        <AboutSection />
        <div className="line-accent" />
        <SkillsSection />
        <div className="line-accent" />
        <ProjectsSection />
        <div className="line-accent" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
