import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [team, setTeam] = useState(null);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/getTeam/${userId}`);

        const { success, user, teamCreated } = response.data;

        if (success) {
          setProfile(user);
          setTeam(teamCreated);
        } else {
          console.error('Failed to fetch profile');
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
  }, [userId]);

  
  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-backscreen w-auto">
        <div className="w-[1000px] mx-auto px-6 py-3 space-y-3 bg-backscreen">
          {/* Grid layout for profile and achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Player Profile */}
            <div className="flex items-center gap-10 justify-center">
              <img
                src="Profilepic.png"
                alt={profile.name}
                width={200}
                height={200}
                className="rounded-full mb-4 ml-4"
              />
              <div className="flex-col">
                <h1 className="text-3xl text-line font-bold text-center mb-6">
                  {profile.Username}
                </h1>
                <div>
                  <p className="text-xl text-white mb-4">
                    Professional Esports Player
                  </p>
                  <p className="text-lg text-line">Team: {team ? team.teamName : "No team created"}</p>
                </div>
              </div>
            </div>

            {/* Right: Achievements */}
            <div className="bg-newgray shadow rounded-lg px-6 py-3">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                Major Achievements
              </h2>
              <div className="flex flex-wrap gap-2">
                {profile.achievements?.map((achievement, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {achievement}
                  </span>
                )) || <p className="text-white">No achievements </p>}
              </div>
            </div>
          </div>

          {/* Bottom: Events Joined and Team */}
          <div className="space-y-3">
            {/* Events Joined */}
            <div className="bg-newgray shadow rounded-lg px-6 py-3 text-line">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.21 13.89 7 23l-5-1 9.2-9.2-3-10.8 3 10.8zM15 9l-1.5-5.5L9 2l3.5 7H15zm1 0 3.5-7L16 0l-1.5 5.5L16 9z"></path>
                </svg>
                Events Joined
              </h2>
              <div className="overflow-x-auto rounded-lg">
                <table className="w-full text-sm text-left text-white">
                  <thead className="text-xs uppercase text-backscreen bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3">Event</th>
                      <th scope="col" className="px-6 py-3">Game</th>
            
                    </tr>
                  </thead>
                  <tbody>
                    {profile.eventsJoined?.map((event, index) => (
                      <tr key={index} className="bg-shade border-b">
                        <td className="px-6 py-3">{event.name}</td>
                        <td className="px-6 py-3">{event.game}</td>
                      </tr>
                    )) || <tr><td colSpan="4">No events joined</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-newgray shadow rounded-lg px-6 py-3 text-line">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6H20M4 12H20m-6 6H4"></path>
                </svg>
                Team
              </h2>
              {team ? (
                <p className="text-lg text-white">Current Team: {team.teamName}</p>
              ) : (
                <p className="text-lg">You haven't created a team yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}