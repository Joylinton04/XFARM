import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {nav: 'Home', to: ''},
    {nav: 'Effectiveness', to: 'effectiveness'},
    {nav: 'Future Prospect', to: 'future_prospect'},
    {nav: 'Strengthen', to: 'strength'},
    {nav: 'About', to: 'about'},
  ]
  return (
    <div className="flex justify-between items-center py-8">
      <h1 className="font-extrabold font-Poppins text-[#f5f5f5]">
        <span></span>
        <span className="text-5xl">Xfarm</span>
      </h1>
      <ul className="flex gap-8 font-semibold text-[#ccc] font-Poppins">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink to={`/${item.to}`}>{item.nav}</NavLink>
          </li>
        ))}
      </ul>
      <h1 className="px-8 py-3 bg-green-700 rounded-full font-medium cursor-pointer">Learn more</h1>
    </div>
  )
}

export default Navbar;
