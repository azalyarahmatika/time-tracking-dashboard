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
  console.log(timeFrame)

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
  
  function getColor(title) {
    switch (title) {
      case 'Work':
        return 'orange';
      case 'Play':
        return 'soft_blue';
      case 'Study':
        return 'light_red';
      case 'Exercise':
        return 'lime_green';
      case 'Social':
        return 'violet';
      case 'Self Care':
        return 'soft_orange';
      default:
        return 'N/A';
    }
  }

  const iconMap = {
    'Work': Work,
    'Play': Play,
    'Study': Study,
    'Exercise': Exercise,
    'Social': Social,
    'Self Care': SelfCare,
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        areas.map((area, index) => (
          <div key={index} className={`w-60 pt-10 rounded-2xl relative bg-${getColor(area.title)}`}>
            <Image
              src={iconMap[area.title]}
              alt={`${area.title} icon`}
              className="h-12 z-0 w-auto absolute right-4 top-0"
            />
            <div className="w-60 p-6 bottom-0 absolute z-10 bg-dark_blue rounded-2xl text-white font-rubik">
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