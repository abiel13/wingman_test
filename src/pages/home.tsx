import Navbar from "@/components/Navbar";
import { FC } from "react";
import { Outlet } from "react-router";

const Home:FC = () => {
  return (
    <div className="px-8 min-h-screen relative">
      {/* navbar */}
      <Navbar />
      {/* render children pages of / */}

      <div className="mx-auto md:w-[80%]">

      <Outlet />
      </div>
    </div>
  );
};

export default Home;
