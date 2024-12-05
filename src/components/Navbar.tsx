import React from "react";
import { Separator } from "./ui/separator";
import SearchBox from "./SearchBox";
import { ModeToggle } from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="sticky top-0  mx-auto py-[1.5rem] z-50 bg-background md:w-[80%]">
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-end flex-1">
          <h1 className="font-sans text-gray-500 font-bold text-xl">Wing</h1>
          <span className="text-blue-400">Shop</span>
        </div>
        <SearchBox />
        <ModeToggle />
      </div>
      <Separator className="mt-2" />
    </div>
  );
};

export default Navbar;
