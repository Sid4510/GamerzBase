import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import TeamList from "../components/Request/TeamList"

export default function TeamRequest() {
  return (
    <div>
      <Navbar />
      <div className=" bg-backscreen px-10 py-5">
        <TeamList />
      </div>
      <Footer />
    </div>
  );
}