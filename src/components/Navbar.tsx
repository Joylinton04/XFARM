import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {nav: 'Home', to: ''},
    // {nav: 'Effectiveness', to: 'effectiveness'},
    // {nav: 'Future Prospect', to: 'future_prospect'},
    // {nav: 'Strengthen', to: 'strength'},
    // {nav: 'About', to: 'about'},
  ];

  return (
    <nav className="relative">
      <div className="flex justify-between items-center py-8">
        {/* Logo */}
        <h1 className="font-extrabold font-header text-[#f5f5f5] z-20">
          <span className="text-5xl max-[64.1rem]:text-3xl uppercase">Xfarm</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="max-[50rem]:hidden flex gap-8 max-[64.1rem]:gap-4 font-semibold text-[#ccc] font-poppins">
          {/* {navItems.map((item, index) => (
            <li key={index}>
              <NavLink 
                to={`/${item.to}`}
                className={({ isActive }) => 
                  `transition-colors hover:text-green-500 ${isActive ? 'text-green-600' : ''}`
                }
              >
                {item.nav}
              </NavLink>
            </li>
          ))} */}
          <NavLink to="/">Home</NavLink>
          <li className="cursor-pointer hover:text-green-500">Future Prospects</li>
          <li className="cursor-pointer hover:text-green-500">Strengthen</li>
          <li className="cursor-pointer hover:text-green-500">About</li>
        </ul>

        {/* CTA Button */}
        <button className="max-[50rem]:hidden px-5 py-3 text-sm bg-green-700 rounded-full font-medium cursor-pointer hover:bg-green-800 transition-colors">
          Learn more
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hidden max-[50rem]:block z-20"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <X size={24} className="text-white" /> : 
            <Menu size={24} className="text-white" />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`
        fixed inset-0 bg-black/95 backdrop-blur-sm z-10 transition-transform duration-300
        max-[64.1rem]:block hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col gap-8 text-center font-poppins text-2xl font-semibold text-[#ccc]">
            {/* {navItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={`/${item.to}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `
                    text-2xl font-semibold transition-colors
                    ${isActive ? 'text-green-600' : 'text-[#ccc]'}
                    hover:text-green-500
                  `}
                >
                  {item.nav}
                </NavLink>
              </li>
              
            ))} */}
            <NavLink onClick={() => setIsMenuOpen(false)} to="/">Home</NavLink>
            <li onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-green-500">Future Prospects</li>
            <li onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-green-500">Strengthen</li>
            <li onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-green-500">About</li>
            <li className="mt-8">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-3 bg-green-700 rounded-full font-medium cursor-pointer hover:bg-green-800 transition-colors"
              >
                Learn more
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;