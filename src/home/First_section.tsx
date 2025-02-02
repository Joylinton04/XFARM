import React from 'react'
import { ArrowRight, Leaf } from 'lucide-react';

const First_section = () => {
    const FeatureCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 max-ssm:p-3">
          <div className="flex items-center gap-3">
            {icon}
            <p className="text-sm font-medium">{title}</p>
          </div>
      </div>
    );
    
  return (
    <main className="relative top-[5rem] max-[35rem]:top-[2rem] flex items-center justify-center font-Poppins cursor-pointer">
          <div className="mx-auto w-[50rem]">
            <div className="flex items-center justify-center">
              <div className="space-y-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-700/40 border border-green-600/80 justify-center"> 
                  <Leaf size={16} className="text-green-500" />
                  <span className="text-sm font-medium text-green-500">Sustainable Farming</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-center max-ssm:text-3xl">
                    The Future of Efficient and Sustainable Farming
                  </h1>
                  
                  <p className="text-gray-300 text-center max-ssm:text-sm">
                    XFARM is a digital farming platform that connects farmers with consumers,
                    helping them grow their crops and sell their produce at a fair price.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-sm:items-center">
                    <button className="max-sm:w-max px-8 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 flex items-center gap-2 group max-ssm:text-sm">
                      Learn More
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
  )
}

export default First_section;
