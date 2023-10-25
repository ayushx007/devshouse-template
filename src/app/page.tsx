import Navbar from '../components/Navbar';
import AboutEvent from '../components/AboutEvent';
import PrevEvents from '@/components/PrevEvents';
import AboutGDSC from '@/components/AboutGDSC';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AboutEvent />
      <AboutGDSC/>
      <PrevEvents/>
    </div>
  )
}

export default Home;