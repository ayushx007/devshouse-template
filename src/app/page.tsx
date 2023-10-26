import Theme from "@/components/Themes";
import Navbar from '@/components/Navbar';
import AboutEvent from '@/components/AboutEvent';
import PrevEvents from '@/components/PrevEvents';
import AboutGDSC from '@/components/AboutGDSC';
import AboutVit from '@/components/AboutVIT';
import Footer from "@/components/Footer";
const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AboutEvent />
      <AboutVit />
      <AboutGDSC/>
      <PrevEvents/>
      <Theme/>
      <Footer/>
    </div>
  );
}

export default Home;