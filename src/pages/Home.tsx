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
    <div className={`flex justify-center items-center mt-16 font-Poppins px-6 ${className}`}>
      <div className="flex flex-wrap justify-between items-center max-w-7xl py-20 gap-6 w-[80%]">
        {/* Text Content */}
        <div className="flex flex-col gap-6 w-full md:w-[50%] lg:w-[40%]">
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
        <div className="h-[28rem] w-[24rem] md:h-[35rem] md:w-[30rem]">
          <img
            src={digital_trans}
            alt="Digital Transformation in Agriculture"
            className="object-cover object-center w-full h-full rounded-2xl shadow-xl shadow-black/30 transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <div className="min-h-[200vh] font-display">
      <BackgroundLayout pic="url('/src/assets/xfarmbg.jpg')">
        <Navbar />
        <First_section />
      </BackgroundLayout>
      {/* Second_section */}
      <div>
        <SectionComponent/>
      </div>
    </div>
  );
};

export default Home;
