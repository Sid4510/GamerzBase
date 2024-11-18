import axios from 'axios';

const TeamCard = ({ team }) => {
    const handleJoinRequest = async () => {
      if (team.members.length >= team.maxPlayers) {
        alert('This team is already full.');
        return;
      }

      try {
        //await axios.post(`/api/team/request/${team._id}`);
        alert('Join request sent successfully!');
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <div className="w-[300px] h-[250px] mx-auto bg-newgray text-white p-6 shadow-md rounded-lg my-4 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{team.teamName}</h3>
        <p className="text-gray-400 mb-2">
          <strong>Game:</strong> {team.gameName}
        </p>
        <p className="text-gray-400 mb-4">
          <strong>Players:</strong> {team.members.length}/{team.maxPlayers}
        </p>
      </div>
      <button
        // onClick={handleJoinRequest}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-auto" // Use mt-auto to push the button to the bottom
        style={{ height: '40px' }} // Set a fixed height for the button
        onClick={handleJoinRequest}
      >
        Request to Join
      </button>
    </div>
  );
};

export default TeamCard;