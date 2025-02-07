import Navbar from "../components/Navbar";
import First_section from "../home/First_section";
import digital_trans from "../assets/digital_trans.png";
import img1 from "../assets/sec_Img1.webp";
import img2 from "../assets/sec_img2.webp";
import img3 from "../assets/sec_img3.jpg";
import img4 from "../assets/sec_img4.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 to-black/70 backdrop-blur-sm transition-all duration-500" />
      </div>
      <div className="relative z-10 px-6 md:px-[var(--padding-r)]">
        {children}
      </div>
    </div>
  );
};

interface SectionProps {
  className?: string;
  pic:string;
}

interface SectionProps2 {
  className?: string;
  pic:string;
  heading: string;
  text: string;
}

const SectionComponent: React.FC<SectionProps> = ({ className = "", pic }) => {
  return (
    <div className={`flex justify-center items-center mt-16 px-6`}>
      <div className={`flex flex-wrap justify-between items-center max-w-7xl py-20 gap-6 w-[85%] max-[64.1rem]:w-[95%] ${className}`}>
        {/* Text Content */}
        <div className="flex flex-col gap-6 max-[800px]:w-full w-1/2 lg:w-[40%]">
          <h1 className="text-4xl font-bold text-black/90 leading-tight">
            Digital Transformation in Agriculture
          </h1>
          <p className=" text-black/70 leading-relaxed">
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
        <div className="h-[26rem] w-[26rem] md:h-[32rem] max-[800px]:w-full min-[64.2rem]:w-[36rem]">
          <img
            src={pic}
            alt="Digital Transformation in Agriculture"
            className="object-cover object-center w-full h-full rounded-2xl shadow-xl shadow-black/30 transition-all duration-500 shad"
          />
        </div>
      </div>
    </div>
  );
};
const SectionComponent2: React.FC<SectionProps2> = ({ className = "",pic, heading, text }) => {
  return (
    <div className={`flex justify-center items-center mt-8 px-6`}>
      <div className={`flex flex-wrap justify-between items-center max-w-7xl py-16 gap-6 w-[85%] max-[64.1rem]:w-[95%] ${className}`}>
        {/* Text Content */}
        <div className="flex flex-col gap-6 max-[800px]:w-full w-1/2 lg:w-[40%]">
          <h1 className="text-4xl font-bold text-black/90 leading-tight">
            {heading}
          </h1>
          <p className="text-black/70 leading-relaxed">
            {text}
          </p>
          <button className="shadow-lg cursor-pointer px-8 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full w-max transition-transform duration-300 hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="h-[26rem] w-[26rem] md:h-[32rem] max-[800px]:w-full min-[64.2rem]:w-[36rem]">
          <img
            src={pic}
            alt="Digital Transformation in Agriculture"
            className="object-cover object-center w-full h-full rounded-2xl shadow-black/30 transition-all duration-500 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <div className="min-h-[300vh] font-display">
      <BackgroundLayout pic="url('/xfarmbg.jpg')">
        <Navbar />
        <First_section />
      </BackgroundLayout>
      {/* Second_section */}
      <div className="font-Poppins">
        <SectionComponent pic={digital_trans}/>
        {/*  */}
        <div className="bg-white py-8">
          <div className="flex items-center justify-center">
            <div className="flex flex-col contain gap-6">
              <h1 className="text-4xl font-bold text-black/90 leading-tight">Farming Innovation</h1>
              <div className="w-[70%] max-[64.2rem]:w-full text-black/70 leading-relaxed">Revolutionizing agriculture with precision technology, IoT sensors, drones and robotics to boost efficiency, sustainability and resilience. Explore the future of farming with regenerative practice, digital platforms and cutting edge biotech solution.</div>
            </div>
          </div>
          <SectionComponent2 
            className="flex-row-reverse"
            pic={img1}
            heading="Increasing Productivity and Efficiency"
            text="Digitalization in agriculture boosts efficiency and productivity with GPS guided equipment, drones, and loT sensors. These technologies ensure precise resource management and uniform crop growth. Data analytics and machine learning enhance yields and predict pest outbreaks, while automation and robotics streamline tasks, reducing costs and increasing profitability"
          />
          <SectionComponent2 
            pic={img2}
            heading="Improving Resilience"
            text="Digitalization in agriculture boosts efficiency and productivity with GPS guided equipment, drones, and loT sensors. These technologies ensure precise resource management and uniform crop growth. Data analytics and machine learning enhance yields and predict pest outbreaks, while automation and robotics streamline tasks, reducing costs and increasing profitability."
          />
          <SectionComponent2 
            className="flex-row-reverse"
            pic={img4}
            heading="Challenges and Barriers"
            text="The agricultural industry encounters climate change, resource shortages, economic challenges, labor deficits, technological constraints, pest resistance, policy inconsistencies, supply chain disruptions, socio-cultural intluences, and environmental concerng These challenges impact productivity and sustainability, calling for comprehensive strategies to ensure sector resilienc"
          />
          <SectionComponent2 
            pic={img3}
            heading="Future Prospects"
            text="The future of agriculture, fueled by technology and sustainability, features precision farming, genetically modified (GM) crops, regenerative practices, urban farming, renewable energy, digital platforms, and biotech advances, ensuring resilience, efficiency, and environmental health while supporting smallholder farmers."
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
