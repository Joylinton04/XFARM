import Navbar from "../components/Navbar";
import First_section from "../home/First_section";
import digital_trans from "../assets/digital_trans.png";

interface BackgroundProps {
  children: React.ReactNode;
  pic: string;
}

const BackgroundLayout = ({ children, pic }: BackgroundProps) => {
  return (
    <div className="relative h-screen bg-black transition-all duration-500 flex flex-col overflow-hidden  text-[#f5f5f5]">
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
      <div className="relative z-10 px-6 md:px-[var(--padding-r)]">
        {children}
      </div>
    </div>
  );
};

interface SectionProps {
  className?: string;
}

const SectionComponent: React.FC<SectionProps> = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center mt-16 px-6`}>
      <div className={`flex flex-wrap justify-between items-center max-w-7xl py-20 gap-6 w-[80%] max-[64.1rem]:w-[95%] ${className}`}>
        {/* Text Content */}
        <div className="flex flex-col gap-6 max-[800px]:w-full w-1/2 lg:w-[40%]">
          <h1 className="text-4xl font-bold text-black/90 leading-tight">
            Digital Transformation in Agriculture
          </h1>
          <p className="text-lg text-black/70 leading-relaxed">
            The integration of advanced technologies such as AI, IoT, drones,
            and data analytics enhances farming efficiency, sustainability, and
            productivity. By leveraging digital tools, farmers can make
            data-driven decisions, optimize resource use, and improve crop
            yields while reducing environmental impact. 🌱🚜
          </p>
          <button className="shadow-lg cursor-pointer px-8 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full w-max transition-transform duration-300 hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="h-[28rem] w-[26rem] md:h-[35rem] max-[800px]:w-full min-[64.2rem]:w-[36rem]">
          <img
            src={digital_trans}
            alt="Digital Transformation in Agriculture"
            className="object-cover object-center w-full h-full rounded-2xl shadow-xl shadow-black/30 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <div className="min-h-[300vh] font-display">
      <BackgroundLayout pic="url('/src/assets/xfarmbg.jpg')">
        <Navbar />
        <First_section />
      </BackgroundLayout>
      {/* Second_section */}
      <div className="font-Poppins">
        <SectionComponent/>
        {/*  */}
        <div className="bg-white py-12">
          <div className="flex items-center justify-center">
            <div className="flex flex-col contain gap-6">
              <h1 className="text-4xl font-bold text-black/90 leading-tight">Farming Innovation</h1>
              <div className="w-[70%]">Revolutionizing agriculture with precision technology, IoT sensors, drones and robotics to boost efficiency, sustainability and resilience. Explore the future of farming with regenerative practice, digital platforms and cutting edge biotech solution.</div>
            </div>
          </div>
          <SectionComponent className="flex-row-reverse"/>
          <SectionComponent/>
          <SectionComponent className="flex-row-reverse"/>
          <SectionComponent/>
        </div>

      </div>
    </div>
  );
};

export default Home;
