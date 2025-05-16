import React from "react";
import { FiSearch } from "react-icons/fi";

const page = () => {
  return (
    <div className=" w-full bg-card  h-full rounded-[10px] border  flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
      <div className=" w-full flex items-center border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4 justify-between">
        <h2 className="text-lg 2xl:text-xl ">Feed</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-3 py-2 bg-card-foreground rounded-[10px] border  focus:outline-none focus:ring-2 focus:ring-primary text-sm 3xl:text-base"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FiSearch />
            </span>
          </div>
          <button className="bg-primary text-sm 3xl:text-base font-semibold text-white rounded-md px-4 py-2 2xl:px-5 3xl:px-6">
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
