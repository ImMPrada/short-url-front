import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store"


export default function Navbar() {
  // const { currentUser, handleLogout } = useContext(SessionContext);
  const dispatch: AppDispatch = useDispatch();
  const sessionState = useSelector((state: RootState) => state.session);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-sans text-5xl text-center font-black xl:tracking-tight text-dark-grey">shorty</h1>
        <div className="flex items-center gap-4">
          {
            sessionState.currentUser ? (
              <span
                className="font-sans text-xl text-center font-black xl:tracking-tight text-dark-grey"
              >
                {sessionState.currentUser.username}
              </span>
            ) : null
          }
          {
            sessionState.currentUser ? (
              <button
                className='bg-cyan text-white font-sans text-base xl:text-xl py-2 px-8 rounded-full hover:opacity-80'
                // onClick={() => dispatch(handleLogout())}
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
