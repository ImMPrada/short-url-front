import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-sans text-5xl text-center font-black xl:tracking-tight text-dark-grey">shorty</h1>
        <Link
          className='bg-cyan text-white font-sans text-base xl:text-xl py-2 px-8 rounded-full hover:opacity-80'
          to='/signup'
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
