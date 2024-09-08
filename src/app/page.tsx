import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Header from "@/components/Header";

export default function Home() {
  return (
    <section>
      <div id="header">
        <Header />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </section>
  );
}
