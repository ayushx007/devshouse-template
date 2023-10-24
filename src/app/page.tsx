import Theme from "@/components/Themes";
import Navbar from '../components/Navbar';
import AboutEvent from '../components/AboutEvent';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AboutEvent />
      <Theme/>
    </div>
  );
}

export default Home;