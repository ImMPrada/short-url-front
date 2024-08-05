import { useContext } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../../contexts/session-context";

export default function Navbar() {
  const { currentUser, handleLogout } = useContext(SessionContext);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-sans text-5xl text-center font-black xl:tracking-tight text-dark-grey">shorty</h1>
        <div className="flex items-center gap-4">
          {
            currentUser ? (
              <span
                className="font-sans text-xl text-center font-black xl:tracking-tight text-dark-grey"
              >
                {currentUser.username}
              </span>
            ) : null
          }
          {
            currentUser ? (
              <button
                className='bg-cyan text-white font-sans text-base xl:text-xl py-2 px-8 rounded-full hover:opacity-80'
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  className='bg-cyan text-white font-sans text-base xl:text-xl py-2 px-8 rounded-full hover:opacity-80'
                  to='/login'
                >
                  Login
                </Link>

                <Link
                  className='bg-cyan text-white font-sans text-base xl:text-xl py-2 px-8 rounded-full hover:opacity-80'
                  to='/signup'
                >
                  Signup
                </Link>
              </>
            )
          }
        </div>
      </div>
    </nav>
  );
}
