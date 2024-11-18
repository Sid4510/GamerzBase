import React from "react";
import GameCard from "../components/GameCard";
import Sponsers from "../components/Sponsers";

export default function EventList() {
  return (
    <div className=" bg-bggray px-10 py-5 text-white w-fit">
      <h1 className="text-4xl font-bold mb-8">EXPLORE GAMES</h1>
      <div className="h-[2px] w-full bg-line mb-5"></div>

      {/* Grid container for the event cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />

        {/* <Sponsers/> */}
      </div>
    </div>
  );
}
