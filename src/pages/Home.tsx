import Navbar from '../components/Navbar';
import First_section from '../home/First_section';

interface BackgroundProps {
  children: React.ReactNode;
  pic: string;
}

const BackgroundLayout = ({ children, pic }: BackgroundProps) => {
  return (
    <div className="relative h-screen bg-black transition-all duration-500 flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 z-0 transition-all duration-1000 transform hover:scale-105"
        style={{
          backgroundImage: pic,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 to-black/50 backdrop-blur-sm transition-all duration-500" />
      </div>
      <div className="relative z-10 px-6 md:px-[var(--padding-r)]">{children}</div>
    </div>
  );
};


const Home = () => {
  return (
    <div className="min-h-[200vh] text-[#f5f5f5] font-display">
      <BackgroundLayout pic="url('/src/assets/xfarmbg.jpg')">
        <Navbar />
        <First_section/>
      </BackgroundLayout>
      {/* Second_section */}
      <div></div>
    </div>
  );
};

export default Home;