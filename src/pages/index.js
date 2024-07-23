import { useEffect, useState } from "react";
import Card from "@/components/Card";
import IntroCard from "@/components/IntroCard";

export default function Home() {
  const [timeFrame, setTimeFrame] = useState('weekly');
  
  return (
    <div className="container flex gap-4">
      <IntroCard 
        timeFrame = { timeFrame }
        setTimeFrame = { setTimeFrame }
      />
      <Card 
         timeFrame = { timeFrame }
      />
    </div>
    
  );
}
