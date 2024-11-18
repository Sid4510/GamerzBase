import React, { useState } from 'react';
import Rankings from './Ranking.jsx'; 
import Navbar from "../common/Navbar.jsx"
import Footer from '../common/Footer.jsx';

// Arrays of top teams for each game
const teamsData = {
  valorant: [
    { id: 1, name: "Team Liquid", region: "Europe" },
    { id: 2, name: "Fnatic", region: "Europe" },
    { id: 3, name: "Sentinels", region: "North America" },
    { id: 4, name: "LOUD", region: "Brazil" },
    { id: 5, name: "DRX", region: "Korea" },
    { id: 6, name: "Paper Rex", region: "Asia-Pacific" },
    { id: 7, name: "OpTic Gaming", region: "North America" },
    { id: 8, name: "Gambit Esports", region: "Europe" },
    { id: 9, name: "XSET", region: "North America" },
    { id: 10, name: "100 Thieves", region: "North America" },
  ],
  pubg: [
    { id: 1, name: "Team Secret", region: "Asia" },
    { id: 2, name: "BTR", region: "Indonesia" },
    { id: 3, name: "RRQ Athena", region: "Thailand" },
    { id: 4, name: "Nova Esports", region: "China" },
    { id: 5, name: "K7 Esports", region: "Korea" },
  ],
  csgo: [
    { id: 1, name: "NAVI", region: "Europe" },
    { id: 2, name: "Astralis", region: "Denmark" },
    { id: 3, name: "G2 Esports", region: "Europe" },
    { id: 4, name: "Liquid", region: "North America" },
  ],
  fifa: [
    { id: 1, name: "Fnatic Tekkz", region: "UK" },
    { id: 2, name: "MSDossary", region: "Saudi Arabia" },
    { id: 3, name: "Nicolas99fc", region: "Argentina" },
  ],
  cod: [
    { id: 1, name: "Atlanta FaZe", region: "North America" },
    { id: 2, name: "OpTic Chicago", region: "North America" },
    { id: 3, name: "Dallas Empire", region: "North America" },
  ]
};

export default function Ranking() {
  const [selectedGame, setSelectedGame] = useState('valorant');

  // Handle game selection change
  const handleGameChange = (e) => {
    setSelectedGame(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className='bg-backscreen px-10 py-5'>
        {/* Dropdown for selecting game */}
        <div className="mb-8">
          <label className="text-white text-xl mr-4">Select Game:</label>
          <select
            className="bg-gray-900 text-white px-4 py-2 rounded"
            value={selectedGame}
            onChange={handleGameChange}
          >
            <option value="valorant">Valorant</option>
            <option value="pubg">PUBG</option>
            <option value="csgo">CSGO</option>
            <option value="fifa">FIFA</option>
            <option value="cod">Call of Duty</option>
          </select>
        </div>
        {/* Pass the selected game teams to EventList */}
        <Rankings events={teamsData[selectedGame]} selectedGame={selectedGame} />
      </div>
      <Footer />
    </div>
  );
}