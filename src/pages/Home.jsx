import { Helmet } from "react-helmet-async";
import { Hero } from "../components/home/Hero.jsx";
import { Stats } from "../components/home/Stats.jsx";
import { AboutPreview } from "../components/home/AboutPreview.jsx";
import { WhyDonate } from "../components/home/WhyDonate.jsx";
import { CtaBand } from "../components/home/CtaBand.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hemovra — Donate Blood, Save Lives</title>
        <meta
          name="description"
          content="Join Hemovra: register as a blood donor or request blood in emergencies. Every donation can save up to three lives."
        />
      </Helmet>
      <Hero />
      <Stats />
      <AboutPreview />
      <WhyDonate />
      <CtaBand />
    </>
  );
}
