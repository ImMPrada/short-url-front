import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../contexts/session-context";
import FormInput from "../form-input";

export default function SignupForm() {
  const { handleSignup, sessionErrors, currentUser } = useContext(SessionContext);
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUserNameChange = (inputValue: HTMLInputElement) => { setUsername(inputValue.value); };
  const handleEmailChange = (inputValue: HTMLInputElement) => { setEmail(inputValue.value); };
  const handlePasswordChange = (inputValue: HTMLInputElement) => { setPassword(inputValue.value); };
  const handleConfirmPasswordChange = (inputValue: HTMLInputElement) => { setConfirmPassword(inputValue.value); };

  useEffect(() => {
    if(currentUser) {
      window.location.href = '/';
    }
  }, [currentUser]);

  return (
    <form
      onSubmit={(e) => {
        handleSignup({e, email, password, confirmPassword, username});
      }}
    >
      <FormInput
        label="Username:"
        type="text"
        inputId="username"
        inputName="username"
        value={username}
        handleChange={handleUserNameChange}
        error={sessionErrors?.username}
      />
      <FormInput
        label="Email:"
        type="email"
        inputId="email"
        inputName="email"
        value={email}
        handleChange={handleEmailChange}
        error={sessionErrors?.email}
      />
      <FormInput
        label="Password:"
        type="password"
        inputId="password"
        inputName="password"
        value={password}
        handleChange={handlePasswordChange}
        error={sessionErrors?.password}
      />
      <FormInput
        label="Confirm Password:"
        type="password"
        inputId="confirmPassword"
        inputName="confirmPassword"
        value={confirmPassword}
        handleChange={handleConfirmPasswordChange}
        error={sessionErrors? sessionErrors['confirm_password'] : ''}
      />

      <button
        type="submit" className="bg-cyan text-white py-3.5 px-8 rounded-xl font-sans font-bold max-xl:w-full"
      >
        Signup
      </button>
    </form>
  );
}
