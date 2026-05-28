import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 md:px-12 py-5 items-center bg-black font-poppins">
      <Link to='/' className="cursor-pointer">
      <h3 className="md:text-2xl text-xl font-bold text-white">PROMPTANA <span className="text-secondary">AI</span></h3>
      </Link>
      <Link to='/analyze-prompt'>
      <button className="font-poppins px-5 bg-secondary cursor-pointer
      md:px-8 py-2 rounded-md text-alternate text-sm md:text-base">Analyze Prompts</button>
      </Link>
    </nav>
  )
}

export default Navbar