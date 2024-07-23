import { useEffect, useState } from "react";
import Card from "@/components/Card";
import IntroCard from "@/components/IntroCard";
import Footer from "@/components/Footer";

export default function Home() {
  const [timeFrame, setTimeFrame] = useState('weekly');
  
  return (
    <div className="container relative">
      <div className="flex flex-col lg:flex-row gap-4">
        <IntroCard 
          timeFrame = { timeFrame }
          setTimeFrame = { setTimeFrame }
        />
        <Card 
          timeFrame = { timeFrame }
        />
      </div>
      
      <Footer />
    </div>
  );
}
