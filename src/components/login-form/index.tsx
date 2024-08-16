import { useState } from "react";
import FormInput from "../form-input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { handleLogin } from "../../redux/thunks/sessionThunks";

export default function LoginForm() {
  const dispatch: AppDispatch = useDispatch();
  const sessionState = useSelector((state: RootState) => state.session);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (inputValue: HTMLInputElement) => { setEmail(inputValue.value); };
  const handlePasswordChange = (inputValue: HTMLInputElement) => { setPassword(inputValue.value); };

  return (
    <form
      onSubmit={(e) => {
        dispatch(handleLogin({e, email, password, temporarySessionToken: sessionState.temporarySessionToken}));
      }}
    >
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

      <button
        type="submit" className="bg-cyan text-white py-3.5 px-8 rounded-xl font-sans font-bold max-xl:w-full"
      >
        Signup
      </button>
    </form>
  );
}
