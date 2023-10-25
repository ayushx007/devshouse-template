import Navbar from '../components/Navbar';
import AboutEvent from '../components/AboutEvent';
import PrevEvents from '@/components/PrevEvents';
import AboutGDSC from '@/components/AboutGDSC';
import AboutVit from '@/components/AboutVIT';
const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AboutEvent />
      <AboutVit />
      <AboutGDSC/>
      <PrevEvents/>
    </div>
  )
}

export default Home;