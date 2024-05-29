import Image from "next/image";
import HeroSection from "./ui/heroSection/heroSection"
import { Syne } from "next/font/google";
import Experience from "./ui/experience/page";
import Skills from "./ui/skills/page";

const syne = Syne({subsets: ['latin']})

export default function Home() {
  return (
    <div className={syne.className}>
    <HeroSection/>
    <Experience/>
    <Skills/>
    </div>
  );
}

