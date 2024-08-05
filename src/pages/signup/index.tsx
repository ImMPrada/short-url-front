import { useContext, useEffect } from "react";
import { SessionContext } from "../../contexts/session-context";
import SignupForm from "../../components/signup-form";

export default function Signup() {
  const { currentUser } = useContext(SessionContext);

  useEffect(() => {
    if(currentUser) {
      window.location.href = '/';
    }
  }, [currentUser]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className='font-sans text-lg text-center mb-4 xl:text-2xl text-gray-700 tracking-widest'>Signup</h2>
        <SignupForm/>
      </div>
    </div>
  );
}
