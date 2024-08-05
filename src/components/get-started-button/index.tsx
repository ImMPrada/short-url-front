import { Link } from "react-router-dom";


export default function GetStartedButton() {
  return (
    <div className='flex justify-center xl:justify-start mt-8'>
      <Link
        className='bg-cyan text-white font-sans text-base xl:text-xl py-2 px-8 rounded-full hover:opacity-80'
        to='/signup'
      >
        Create an account
      </Link>
    </div>
  );
}
