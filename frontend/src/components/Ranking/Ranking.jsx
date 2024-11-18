import React from "react";
import RankCard from "./rankCard";

export default function Rankings({ events, selectedGame }) {
  // Format the game name for the title
  const gameTitles = {
    valorant: "Valorant",
    pubg: "PUBG",
    csgo: "CSGO",
    fifa: "FIFA",
    cod: "Call of Duty",
  };

  return (
    <div className="bg-bggray text-white p-10">
      <h1 className="text-4xl font-bold mb-8">TOP TEAMS IN {gameTitles[selectedGame]}</h1>
      <div className="h-[2px] w-full bg-line mb-5"></div>

      {/* Grid container for the event cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {events.map((team) => (
          <RankCard key={team.id} team={team} />
        ))}
      </div>

    </div>
  );
}