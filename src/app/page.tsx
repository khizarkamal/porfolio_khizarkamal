import Image from "next/image";
import profileImage from "@/assets/images/Khizar.jpg";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <section>
      <header className="flex justify-between items-center gap-4 my-20">
        <div className="font-poppins text-center font-bold text-4xl flex flex-col gap-2 md:text-left text-primary">
          <h3>Hi 👋</h3>
          <h3>My name is</h3>
          <h3 className="font-poppins font-bold leading-10 tracking-wide flex gap-4 justify-center">
            <span className="text-purple inline-block">Khizar</span>
            <span className="text-lightBlue mr-4 inline-block">Kamal</span>
          </h3>
          <h3>I build things for the web and love ☕</h3>
        </div>
        <figure className="hidden rounded-full bg-gradient-primary sm:flex sm:items-center sm:justify-center sm:min-w-56 sm:min-h-56 sm:max-w-56 sm:max-h-56  md:min-w-80 md:min-h-80 md:max-w-80 md:max-h-80 ">
          <Image
            src={profileImage}
            className="w-[95%] h-[95%] object-cover grayscale rounded-full hover:grayscale-0 duration-500 cursor-pointer"
            alt="profile-image"
          />
        </figure>
      </header>
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
