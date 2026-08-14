import Hero from "../components/landing/Hero";
import Problem from "../components/landing/Problem";
import Product from "../components/landing/Product";
import HowItWorks from "../components/landing/HowItWorks";
import LearningShowcase from "../components/landing/LearningShowcase";
import AdaptiveShowcase from "../components/landing/AdaptiveShowcase";
import LearningMap from "../components/landing/LearningMap";
import TextbookScanner from "../components/landing/TextbookScanner";
import LanguageSection from "../components/landing/LanguageSection";
import FinalCTA from "../components/landing/FinalCTA";

function Landing() {
  return (
    <>
      <Hero />
      <Problem />
      <Product />
      <HowItWorks />
      <LearningShowcase />
      <AdaptiveShowcase />
      <LearningMap />
      <TextbookScanner />
      <LanguageSection />
      <FinalCTA />
    </>
  );
}

export default Landing;