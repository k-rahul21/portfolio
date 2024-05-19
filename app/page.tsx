import Image from "next/image";
import HeroSection from "./ui/heroSection/heroSection"
import { Syne } from "next/font/google";

const syne = Syne({subsets: ['latin']})

export default function Home() {
  return (
    <div className={syne.className}>
    <HeroSection/>
    </div>
  );
}

