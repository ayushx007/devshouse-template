import Navbar from '../components/Navbar';
import AboutEvent from '../components/AboutEvent';
import PrevEvents from '@/components/PrevEvents';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AboutEvent />
      <PrevEvents/>
    </div>
  )
}

export default Home;