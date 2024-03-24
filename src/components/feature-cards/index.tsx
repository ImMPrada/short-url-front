import OvalBrandRecognition from '../../assets/brand_recognition.svg';
import OvalDetailedRecords from '../../assets/detailed_records.svg';
import OvalFullyCustomizable from '../../assets/fully_customizable.svg';
import FeatureCard from './feature-card';


const features = [
  {
    title: 'Brand Recognition',
    description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    image: OvalBrandRecognition
  },
  {
    title: 'Detailed Records',
    description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    image: OvalDetailedRecords
  },
  {
    title: 'Fully Customizable',
    description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    image: OvalFullyCustomizable
  }
];

export default function FeatureCards() {

  return (
    <div className='w-full bg-light-grey py-32'>
      <div className='font-sans max-xl:w-full max-xl:px-10 max-w-[540px] mx-auto mb-14'>
        <h2 className='text-5xl font-bold text-black text-center'>Advanced Statistics</h2>
        <p className='text-lg text-grey text-center mt-4'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>

      <div className='w-full xl:max-w-[1110px] mx-auto flex flex-col xl:flex-row justify-between align-middle relative z-10'>
        <div className='h-[calc(100%-10rem)] xl:h-2  w-2 xl:w-full bg-cyan absolute top-10 xl:top-1/2 left-1/2 xl:left-0' />

        <div className='pt-0 max-xl:p-0 max-xl:mx-auto'>
          <FeatureCard 
            title={features[0].title}
            description={features[0].description}
            image={features[0].image}
          />
        </div>

        <div className='pt-12 max-xl:p-0 max-xl:mx-auto'>
          <FeatureCard 
            title={features[1].title}
            description={features[1].description}
            image={features[1].image}
          />
        </div>

        <div className='pt-24 max-xl:p-0 max-xl:mx-auto'>
          <FeatureCard 
            title={features[2].title}
            description={features[2].description}
            image={features[2].image}
          />
        </div>
      </div>
    </div>
  );
}
