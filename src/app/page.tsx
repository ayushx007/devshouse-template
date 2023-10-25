import Theme from "@/components/Themes";
import Navbar from '../components/Navbar';
import AboutEvent from '../components/AboutEvent';
import PrevEvents from '@/components/PrevEvents';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AboutEvent />
      <PrevEvents/>
      <Theme/>
    </div>
  );
}

export default Home;