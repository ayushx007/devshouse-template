import Theme from "@/components/Themes";

import Navbar from "@/components/Navbar";
import AboutEvent from "@/components/AboutEvent";
import PrevEvents from "@/components/PrevEvents";
import AboutGDSC from "@/components/AboutGDSC";
import AboutVit from "@/components/AboutVIT";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import PrevSponsors from "@/components/PrevSponsors";
import Sponsors from "@/components/Sponsors";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <AboutVit />
      <Sponsors />
      <AboutGDSC />
      <PrevEvents />
      <Sponsors />
      <PrevSponsors />
      <Theme />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
