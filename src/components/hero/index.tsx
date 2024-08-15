import working_with_computer from '../../assets/working_with_computer.png';
import GetStartedButton from '../get-started-button';

export default function Hero() {
  return (
    <div className='flex flex-col xl:flex-row xl:justify-end xl:relative'>
      <img className='ml-6 xl:m-0' src={working_with_computer} alt="working with computer"/>

      <div className='xl:absolute xl:z-10 w-full'>
        <div className='w-96 xl:w-[1110px] mx-auto'>
          <div className='max-w-full xl:max-w-[600px]'>
            <h1 className='font-sans text-5xl text-center xl:text-left xl:text-6xl font-black xl:tracking-tight text-dark-grey'>
              More than just shorter links
            </h1>

            <p className='font-sans text-lg text-center mt-4 xl:m-0 xl:text-left xl:text-2xl text-grey tracking-widest'>
              Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>

            {/* <GetStartedButton/> */}
          </div>
        </div>
      </div>
    </div>
  )
}
