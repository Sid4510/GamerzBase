import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TeamCard from "./TeamCard"; // Assuming TeamCard component exists
import CreateTeam from "./CreateTeam"; 
import { FaPlus } from "react-icons/fa"; 


const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [isCreateTeamVisible, setCreateTeamVisible] = useState(false);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get('http://localhost:5000/request/getTeams', {
          params: { userId },
        });
        
        const {success,message}=response.data
        if (success) {
          setTeams(response.data.teams);
        } else {
          console.error(message); // Log any error message from the response
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTeams();
  }, []);

  const handleCreateTeamClick = () => {
    setCreateTeamVisible(!isCreateTeamVisible); // Toggle visibility
  };

  return (
    <div className="bg-bggray text-white p-10">
    <h1 className="text-4xl font-bold mb-8">TEAMS</h1>
    <div className="h-[2px] w-full bg-line mb-5"></div>
    <button
      className="bg-line text-white font-bold py-2 px-4 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300 ease-in-out mb-6"
      onClick={handleCreateTeamClick} // Use click handler
    >
      <FaPlus className="mr-2" />
      Create Team
    </button>

    {/* Create Team Form - Only show if isCreateTeamVisible is true */}
    {isCreateTeamVisible && <CreateTeam />}

    {/* Grid container for the team cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      {teams.map((team) => (
        <div key={team._id}>
          <TeamCard team={team} /> {/* Pass the team object to TeamCard */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default TeamsList;

