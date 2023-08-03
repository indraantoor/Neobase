import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 border-b border-white/25 px-4 mx-9">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo.PNG"
            alt="logo"
            width="170px"
            height="70px"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <h2 className="text-xl font-bold">Node Moniker</h2>
            <p className="font-light">sentljqd5s...axu6c</p>
          </div>
          <div className="flex items-center">
            <button className="bg-[#2D6F40] hover:bg-306b37 text-white py-2 px-4 rounded">
              Start Node
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
