import { useState,useEffect } from 'react';
import axios from 'axios';
import { handleError, handleSuccess } from '../../utils/handleMsg';

// const CreateTeam = () => {
//   const [teamName, setTeamName] = useState('');
//   const [gameName, setGameName] = useState('');
//   const [maxPlayers, setMaxPlayers] = useState(5); 
//   const [userId, setUserId] = useState('');
    
//   useEffect(() => {
//     // Get the username from localStorage
//     const UserId = localStorage.getItem('userId');
//     if (UserId) {
//         setUserId(UserId); // Set it in state if found
//     }
// }, []);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post('http://localhost:5000/request/createteam', {
//         teamName,
//         gameName,
//         maxPlayers,
//         createdBy: userId,
//       });
  
//       const { success, message } = response.data; 
//       if (success) {
//         handleSuccess(message);
//       } else if(success==false){
//         handleError(message);
//       }
//       else{
//         handleError(message)
//       }
//     } catch (err) {
//       console.error(err.response ? err.response.data : err.message);
//       const errorMessage = err.response && err.response.data && err.response.data.message
//         ? err.response.data.message
//         : 'Failed to create team. Please try again.';
//         handleError(errorMessage); 
//     }
//   };
  

//   return (
//     <form className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold mb-6">Create a New Team</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teamName">Team Name</label>
//         <input
//           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
//           type="text"
//           id="teamName"
//           placeholder="Enter team name"
//           value={teamName}
//           onChange={(e) => setTeamName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gameName">Game Name</label>
//         <input
//           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
//           type="text"
//           id="gameName"
//           placeholder="Enter game name"
//           value={gameName}
//           onChange={(e) => setGameName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxPlayers">Max Players</label>
//         <input
//           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
//           type="number"
//           id="maxPlayers"
//           placeholder="Enter max players"
//           value={maxPlayers}
//           onChange={(e) => setMaxPlayers(e.target.value)}
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
//       >
//         Create Team
//       </button>
//     </form>
//   );
// };

// export default CreateTeam;

const CreateTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [gameName, setGameName] = useState('');
  const [maxPlayers, setMaxPlayers] = useState(5); 
  const [userId, setUserId] = useState('');
    
  useEffect(() => {
    // Get the username from localStorage
    const UserId = localStorage.getItem('userId');
    if (UserId) {
        setUserId(UserId); // Set it in state if found
    }
}, []);

  const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post('http://localhost:5000/request/createteam', {
            teamName,
            gameName,
            maxPlayers,
            createdBy: userId,
          });
      
          const { success, message } = response.data; 
          if (success) {
            handleSuccess(message);
          } else if(success==false){
            handleError(message);
          }
          else{
            handleError(message)
          }
        } catch (err) {
          console.error(err.response ? err.response.data : err.message);
          const errorMessage = err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : 'Failed to create team. Please try again.';
            handleError(errorMessage); 
        }
      };

  return (
    <form className="w-[400px] mx-auto bg-newgray pt-4 px-6 pb-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-white">Create a New Team</h2>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="teamName">Team Name</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          type="text"
          id="teamName"
          placeholder="Enter team name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="gameName">Game Name</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
          type="text"
          id="gameName"
          placeholder="Enter game name"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="maxPlayers">Max Players</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
          type="number"
          id="maxPlayers"
          placeholder="Enter max players"
          value={maxPlayers}
          onChange={(e) => setMaxPlayers(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      >
        Create Team
      </button>
    </form>
  );
};

export default CreateTeam;