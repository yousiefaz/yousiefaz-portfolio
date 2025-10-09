import HomeSection from "@/containers/home";
import AboutSection from "@/containers/about";
import ContactSection from "@/containers/contact";
import ProjectsSection from "@/containers/projects";
import SkillsSection from "@/containers/skills";
import ScrollToTop from "@/components/scroll-to-top";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container space-y-24 pt-32 pb-16 md:pt-48 md:pb-24">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <ScrollToTop />
      <Footer />
    </main>
  );
}
