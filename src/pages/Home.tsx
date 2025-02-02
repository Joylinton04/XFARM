import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import Navbar from '../components/Navbar';

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

const FeatureCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
    <div className="flex items-center gap-3">
      {icon}
      <p className="text-sm font-medium">{title}</p>
    </div>
</div>
);

const Home = () => {
  return (
    <div className="min-h-[200vh] text-[#f5f5f5] font-display">
      <BackgroundLayout pic="url('/src/assets/xfarmbg.jpg')">
        <Navbar />
        <main className="relative top-[5rem] flex items-center justify-center font-Poppins cursor-pointer">
          <div className="mx-auto w-[50rem]">
            <div className="flex items-center justify-center">
              <div className="space-y-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-700/40 border border-green-600/80 justify-center"> 
                  <Leaf size={16} className="text-green-500" />
                  <span className="text-sm font-medium text-green-500">Sustainable Farming</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
                    The Future of Efficient and Sustainable Farming
                  </h1>
                  
                  <p className="text-gray-300 text-center">
                    XFARM is a digital farming platform that connects farmers with consumers,
                    helping them grow their crops and sell their produce at a fair price.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 flex items-center gap-2 group">
                      Learn More
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300">
                      Watch Demo
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-6 justify-center items-center">
                  <FeatureCard 
                    icon={<Leaf className="text-green-500" size={20} />} 
                    title="Sustainable Methods"
                  />
                  <FeatureCard 
                    icon={<Leaf className="text-green-500" size={20} />} 
                    title="Smart Analytics"
                  />
                </div>
              </div>
              
              <div className="hidden md:block">
                {/* Add an image or decorative element here if desired */}
              </div>
            </div>
          </div>
        </main>
      </BackgroundLayout>
    </div>
  );
};

export default Home;