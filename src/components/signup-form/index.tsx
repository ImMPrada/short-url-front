import { useState } from "react";
import FormInput from "../form-input";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { handleSignUp } from "../../redux/thunks/sessionThunks";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const dispatch: AppDispatch = useDispatch();
  const sessionState = useSelector((state: RootState) => state.session);
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUserNameChange = (inputValue: HTMLInputElement) => { setUsername(inputValue.value); };
  const handleEmailChange = (inputValue: HTMLInputElement) => { setEmail(inputValue.value); };
  const handlePasswordChange = (inputValue: HTMLInputElement) => { setPassword(inputValue.value); };
  const handleConfirmPasswordChange = (inputValue: HTMLInputElement) => { setConfirmPassword(inputValue.value); };

  return (
    <form
      onSubmit={(e) => {
        dispatch(handleSignUp({e, email, password, confirmPassword, username, temporarySessionToken: sessionState.temporarySessionToken}));
      }}
    >
      <FormInput
        label="Username:"
        type="text"
        inputId="username"
        inputName="username"
        value={username}
        handleChange={handleUserNameChange}
        error={(sessionState.errors as any)?.username}
      />
      <FormInput
        label="Email:"
        type="email"
        inputId="email"
        inputName="email"
        value={email}
        handleChange={handleEmailChange}
        error={(sessionState.errors as any)?.email}
      />
      <FormInput
        label="Password:"
        type="password"
        inputId="password"
        inputName="password"
        value={password}
        handleChange={handlePasswordChange}
        error={(sessionState.errors as any)?.password}
      />
      <FormInput
        label="Confirm Password:"
        type="password"
        inputId="confirmPassword"
        inputName="confirmPassword"
        value={confirmPassword}
        handleChange={handleConfirmPasswordChange}
        error={(sessionState.errors as any)?.confirm_password}
      />

      <div className="w-full flex flex-col gap-2">
        <button
          type="submit" className="bg-cyan text-white py-3.5 px-8 rounded-xl font-sans font-bold max-xl:w-full"
        >
          Signup
        </button>
        <span className="text-center text-gray-700 font-sans text-xs">
          - or -
        </span>
        <Link to="/login" className="block bg-cyan text-center text-white py-3.5 px-8 rounded-xl font-sans font-bold">
          Login
        </Link>
      </div>
    </form>
  );
}
