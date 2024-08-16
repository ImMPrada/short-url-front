import { useEffect } from "react";
import SignupForm from "../../components/signup-form";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function Signup() {
  const sessionState = useSelector((state: RootState) => state.session);

  useEffect(() => {
    if(sessionState.currentUser) {
      window.location.href = '/';
    }
  }, [sessionState.currentUser]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className='font-sans text-lg text-center mb-4 xl:text-2xl text-gray-700 tracking-widest'>Signup</h2>
        <SignupForm/>
      </div>
    </div>
  );
}