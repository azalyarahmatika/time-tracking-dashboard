import Image from 'next/image';
import Jeremy from '../../public/images/image-jeremy.png';

function IntroCard({ timeFrame, setTimeFrame}) {
  const handleSelectionChange = (timeFrame) => {
    setTimeFrame(timeFrame);
  };
  
  return (
    <div className="lg:w-60 w-full bg-dark_blue font-rubik rounded-2xl lg:mb-0">
      <div className='lg:w-60 w-full p-6 text-white bg-blue rounded-2xl flex gap-4 lg:gap-0 lg:flex-col '>
        <div className='w-20'>
          <Image 
            src={Jeremy}
            alt={Jeremy}
            className='rounded-full border-2 border-white'
          />
        </div>
        <div className='lg:pt-10 lg:pb-8'>
          <p className='text-sm text-pale_blue'>Report for</p>
          <p className='text-4xl tracking-wide font-light py-1'>Jeremy Robson</p>
        </div>
      </div>
    
      <ul className="lg:space-y-4 p-8 flex gap-10 justify-between lg:block">
        <li>
          <a
            href="#"
            className={timeFrame === 'daily' ? 'text-white' : 'text-desaturated_blue hover:text-white'}
            onClick={() => handleSelectionChange('daily')}
          >
            Daily
          </a>
        </li>
        <li>
          <a
            href="#"
            className={timeFrame === 'weekly' ? 'text-white' : 'text-desaturated_blue hover:text-white'}
            onClick={() => handleSelectionChange('weekly')}
          >
            Weekly
          </a>
        </li>
        <li>
          <a
            href="#"
            className={timeFrame === 'monthly' ? 'text-white' : 'text-desaturated_blue hover:text-white'}
            onClick={() => handleSelectionChange('monthly')}
          >
            Monthly
          </a>
        </li>
      </ul>
    </div>
  );
}

export default IntroCard;