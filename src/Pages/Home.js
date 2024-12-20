import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AlbumList from "../feature/Album/component/AlbumList.js";
import AlbumForm from "../feature/Album/component/AlbumForm.js";

const Home = () => {
  const [activeTab, setActiveTab] = useState("list");
 
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onTabChange={setActiveTab} activeTab={activeTab} />
      {activeTab === "list" ? (
        <AlbumList />
      ) : (
        <AlbumForm />
      )}
    </div>
  );
};

export default Home;
