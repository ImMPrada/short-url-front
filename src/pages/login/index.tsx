import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/login-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearErrors } from "../../redux/slices/sessionSlice";

export default function Login() {
  const sessionState = useSelector((state: RootState) => state.session);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionState.currentUser) return;
    dispatch(clearErrors());
  }, []);

  useEffect(() => {
    if (sessionState.currentUser) {
      navigate("/");
    }
  }, [sessionState.currentUser]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className='font-sans text-lg text-center mb-4 xl:text-2xl text-gray-700 tracking-widest'>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
