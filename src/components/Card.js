import { useEffect, useState } from "react";
import Image from 'next/image';
import ellipsis from '../../public/images/icon-ellipsis.svg';
import Exercise from '../../public/images/icon-exercise.svg';
import Play from '../../public/images/icon-play.svg';
import SelfCare from '../../public/images/icon-self-care.svg';
import Social from '../../public/images/icon-social.svg';
import Study from '../../public/images/icon-study.svg';
import Work from '../../public/images/icon-work.svg';

function Card({ timeFrame = 'monthly' }) {
  const [areas, setArea] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setArea(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  function getLabel(timeFrame) {
    switch (timeFrame) {
      case 'daily':
        return 'Yesterday';
      case 'weekly':
        return 'Last Week';
      case 'monthly':
        return 'Last Month';
      default:
        return 'N/A';
    }
  }
  
  const colorMap = {
    'Work': 'orange',
    'Play': 'soft_blue',
    'Study': 'light_red',
    'Exercise': 'lime_green',
    'Social': 'violet',
    'Self Care': 'soft_orange',
  };

  const iconMap = {
    'Work': Work,
    'Play': Play,
    'Study': Study,
    'Exercise': Exercise,
    'Social': Social,
    'Self Care': SelfCare,
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        areas.map((area, index) => (
          <div key={index} className={`lg:w-60 w-full h-60 lg:h-auto pt-10 rounded-2xl relative bg-${colorMap[area.title]}`}>
            <Image
              src={iconMap[area.title]}
              alt={`${area.title} icon`}
              className="h-14 z-0 w-auto absolute right-4 top-0"
            />
            <div className="lg:w-60 w-full p-6 bottom-0 absolute z-10 bg-dark_blue rounded-2xl text-white font-rubik hover:cursor-pointer hover:bg-[#21016c]">
              <div className="flex items-center justify-between">
                <p className="text-lg">{area.title}</p>
                <div>
                  <Image
                    src={ellipsis}
                    alt="ellipsis"
                    className="w-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-light text-5xl mt-6 mb-3">
                  {area.timeframes && area.timeframes[timeFrame]
                    ? `${area.timeframes[timeFrame].current}hrs`
                    : 'N/A'
                  }
                </p>
                <p className="text-sm text-desaturated_blue">
                  {getLabel(timeFrame)} -
                  <span>
                    {area.timeframes && area.timeframes[timeFrame]
                    ? ` ${area.timeframes[timeFrame].previous}hrs`
                    : 'N/A'
                    }
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;