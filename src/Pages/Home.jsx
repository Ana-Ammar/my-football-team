import React from "react";
import { useLoaderData } from "react-router";
import PlayerCard from "./PlayerCard";

const Home = () => {

    const playersData = useLoaderData()
    

  return (
    <div className="mx-auto my-20 px-8 ">
      <h1 className="font-bold text-3xl text-black/90 text-center mb-8">
        Our Players
      </h1>
      
      
      <div className="grid grid-cols-3 gap-6">
        {
            playersData.map(player => <PlayerCard
            key={player.id}
             player={player}></PlayerCard>)
        }
      </div>
    </div>
  );
};

export default Home;
