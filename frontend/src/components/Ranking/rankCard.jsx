import React from "react";

export default function RankCard({ team }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 p-4 relative">
      {/* Bold text at top left corner */}
      <h3 className="absolute top-2 left-2 text-xl font-bold text-white">{team.name}</h3>
      <div className="mt-6">
        <p className="text-gray-400">{team.region}</p>
      </div>
    </div>
  );
}