import Image from "next/image";
import HeroSection from "./Components/Hero";
import SampleIcon from "./Components/SampleIcon";
import IconBox from "./Components/IconBox";
import TextScrollRevealSection from "./Components/TextReveal";
import FeatureSection from "./Components/FeatureSection";
import ShowcaseSection from "./Components/ShowcaseSection";
import Marquee from "./Components/Marquee";
import MarqueeLogo from "./Components/MarqueeLogo";
import CtaCard from "./Components/CTA";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="overflow-x-hidden">
        <HeroSection></HeroSection>
      </div>
      <div className="overflow-x-hidden">
        <FeatureSection></FeatureSection>
        <Marquee />
        <ShowcaseSection></ShowcaseSection>
        <MarqueeLogo></MarqueeLogo>
        <CtaCard></CtaCard>
        <Footer></Footer>
      </div>
    </main>
  );
}
