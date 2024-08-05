import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../contexts/session-context";
import FormInput from "../form-input";

export default function LoginForm() {
  const { handleLogin, sessionErrors, currentUser } = useContext(SessionContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (inputValue: HTMLInputElement) => { setEmail(inputValue.value); };
  const handlePasswordChange = (inputValue: HTMLInputElement) => { setPassword(inputValue.value); };

  useEffect(() => {
    if(currentUser) {
      window.location.href = '/';
    }
  }, [currentUser]);

  return (
    <form
      onSubmit={(e) => {
        handleLogin({e, email, password});
      }}
    >
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

      <button
        type="submit" className="bg-cyan text-white py-3.5 px-8 rounded-xl font-sans font-bold max-xl:w-full"
      >
        Signup
      </button>
    </form>
  );
}
