import axios from 'axios';

const TeamCard = ({ team }) => {
//   const handleJoinRequest = async () => {
//     if (team.members.length >= team.maxPlayers) {
//       alert('This team is already full.');
//       return;
//     }

//     try {
//       await axios.post(/api/team/request/${team._id});
//       alert('Join request sent successfully!');
//     } catch (err) {
//       console.error(err);
//     }
//   };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg my-4">
      <h3 className="text-xl font-bold mb-2">{team.teamName}</h3>
      <p className="text-gray-700 mb-2"><strong>Game:</strong> {team.gameName}</p>
      <p className="text-gray-700 mb-4">
        <strong>Players:</strong> {team.members.length}/{team.maxPlayers}
      </p>
      <button
        // onClick={handleJoinRequest}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      >
        Request to Join
      </button>
    </div>
  );
};

export default TeamCard;