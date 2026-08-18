import GlobalRedHero from "@/components/red-grid/GlobalRedHero";
import GlobalRedBento from "@/components/red-grid/GlobalRedBento";
import GlobalRedProjects from "@/components/red-grid/GlobalRedProjects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = {
  title: 'Yahia | Portfolio',
  description: 'Backend-Heavy Software Engineer delivering production-grade applications.',
};

export default function HomePage() {
  return (
    <>
      <JsonLd type="website" />
      <Navbar />
      <main className="w-full min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-900/50">
        <GlobalRedHero />
        <GlobalRedBento />
        <GlobalRedProjects />
      </main>
      <Footer />
    </>
  );
}
