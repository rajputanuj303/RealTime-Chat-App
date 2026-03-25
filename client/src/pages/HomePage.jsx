import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext);

  return (
    <div className="w-full h-screen px-4 py-4 sm:px-[5%] sm:py-[5%] lg:px-[10%] xl:px-[15%] flex items-center justify-center">
      <div
        className={`w-full max-w-[1200px] bg-white/10 backdrop-blur-xl border-2 border-gray-600 rounded-3xl overflow-hidden h-full sm:h-[90%] grid grid-cols-1 relative ${selectedUser ? "md:grid-cols-[1fr_1.5fr_1fr] lg:grid-cols-[1fr_2fr_1fr]" : "md:grid-cols-[1fr_2fr]"} shadow-2xl`}
      >
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
