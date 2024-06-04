import React from "react";
import Nav from "./components/home/Nav";
import SideNav from "./components/home/SideNav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="p-6 text-lg">
        <p className="pb-8">Welcome Josh, to Your Personal Movie Tracker!</p>
        <SideNav />
      </div>
    </>
  );
};

export default Home;
