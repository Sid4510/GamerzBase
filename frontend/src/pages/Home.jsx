

import React from "react";
import Games from "../pages/Games";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";


export default function Home() {
  // Sample data
  const stats = {
    playersJoined: 1245,
    totalGames: 30,
    totalEvents: 58,
  };

  const categories = [
    { title: "MOBA", games: "League of Legends, Dota 2" },
    { title: "FPS", games: "CS:GO, Valorant" },
    { title: "Battle Royale", games: "Fortnite, PUBG" },
  ];

  return (
    <div>
      <Navbar/>
      <div className="bg-backscreen px-10 py-5">
        <div className="bg-bggray text-white">
          {/* Hero Section */}
          <section className="bg-bggray text-white pt-16 pb-8 text-center ">
            <h1 className="text-6xl font-bold mb-10">
              Welcome to GamerzBase
            </h1>
            <p className="text-2xl mb-4">
              An Esports Management System where you can Discover, Join, and Compete in Esports Events for your favorite
              Games!
            </p>
            <p className="text-2xl mb-8">
            Connect with other players, stay updated on the latest tournaments, and showcase your skills on a global stage.
            </p>
          </section>

          {/* Statistics Section
          <section className="py-12  text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-shade shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold">Total Players Joined</h2>
                <p className="text-4xl font-semibold text-line">
                  {stats.playersJoined}
                </p>
              </div>
              <div className="bg-shade shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold">Total Games Available</h2>
                <p className="text-4xl font-semibold text-line">
                  {stats.totalGames}
                </p>
              </div>
              <div className="bg-shade shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold">Total Events Hosted</h2>
                <p className="text-4xl font-semibold text-line">
                  {stats.totalEvents}
                </p>
              </div>
            </div>
          </section> */}

          {/* Event Categories Section */}
          <section className="py-12 text-line">
            <Games />
          </section>

          {/* Call-to-Action Section
          <section className="bg-blue-600 text-white py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Esports Community
            </h2>
            <p className="mb-8">
              Stay updated on the latest events and be the first to know about
              new tournaments.
            </p>
            <a
              href="/subscribe"
              className="bg-white text-blue-600 px-8 py-2 rounded font-semibold"
            >
              Subscribe to Newsletter
            </a>
          </section> */}
        </div>
      </div>

      <Footer/>
    </div>
  );
}