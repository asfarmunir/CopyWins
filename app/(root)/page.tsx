import { ProfileDialog } from "@/components/shared/ProfileModal";
import Image from "next/image";
import React from "react";
import {
  FiSearch,
  FiPlus,
  FiHeart,
  FiMessageSquare,
  FiMoreHorizontal,
} from "react-icons/fi";

const SocialTradingFeed = () => {
  return (
    <div className="w-full bg-card  rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
      {/* Header with search and create post button */}
      <div className="w-full flex items-center border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4 justify-between">
        <h2 className="text-lg 2xl:text-xl">Feed</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-3 py-2 bg-card-foreground rounded-[10px] border focus:outline-none focus:ring-2 focus:ring-primary text-sm 3xl:text-base"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FiSearch />
            </span>
          </div>
          <button className="bg-primary text-sm 3xl:text-base font-semibold text-white rounded-md px-4 py-2 2xl:px-5 3xl:px-6">
            Create Post
          </button>
          <ProfileDialog />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 2xl:gap-6">
        <div className="lg:col-span-2 space-y-4 2xl:space-y-6">
          <div className="bg-card-foreground rounded-[10px] border p-4">
            <div className="flex items-center ">
              <div className="w-10 h-10 rounded-md bg-[#5EA259] flex items-center justify-center ">
                <p className=" font-semibold text-white">SC</p>
              </div>
              <button className="flex-1  rounded-full py-2 px-4 text-left  transition text-sm 3xl:text-base">
                Start a post
              </button>
              <button className="p-2 text-primary   bg-card dark:hover:bg-gray-800 rounded-full">
                <FiPlus />
              </button>
            </div>
          </div>

          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="bg-card-foreground rounded-[10px] border p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-md bg-[#0C9DFF] flex items-center justify-center ">
                    <p className=" font-semibold text-white">SC</p>
                  </div>{" "}
                  <div>
                    <h3 className="font-semibold text-sm mb-0.5 capitalize">
                      sandro carossela · @UWSMC
                    </h3>
                    <p className="text-gray-500 text-xs">16 Dec at 6:43 pm</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#28A745] text-white text-xs font-normal">
                    Verified
                  </span>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <FiMoreHorizontal />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm">
                  Known as "The Wolf of All Streets," Scott Melker provides
                  regular market updates, technical analysis, and interviews
                  with key industry figures.
                </p>
              </div>
              <div className=" w-full h-[330px] 2xl:h-[400px] 3xl:h-[480px] rounded-[10px] bg-white">
                <Image
                  src={"/authBg1.webp"}
                  alt="featured"
                  width={500}
                  height={200}
                  className="rounded-[10px] object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between border-t border-[#E3E3E4] dark:border-[#0F2430] pt-4 mt-4 mb-2">
                <button className="flex items-center space-x-3 text-gray-500 hover:text-red-500 text-sm">
                  <Image
                    src={"/icons/heart.svg"}
                    alt="like"
                    width={20}
                    height={20}
                    className="dark:invert "
                  />
                  <Image
                    src={"/icons/comment.svg"}
                    alt="like"
                    width={20}
                    height={20}
                    className="dark:invert "
                  />
                </button>
                <button className="flex items-center space-x-3 text-gray-500 dark:text-slate-100 hover:text-blue-500 text-sm">
                  <span>1 Like</span>
                  <span>·</span>
                  <span>3 Comments</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1 space-y-4 2xl:space-y-6">
          {/* Live trade feed */}
          <div className="bg-card-foreground rounded-[10px] border p-4">
            <h2 className="2xl:text-lg font-semibold ">Livetrade feed</h2>
            <p className="text-gray-500 text-sm mb-4">
              Recent Trades From Your Subscribed Traders
            </p>

            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center bg-card justify-between p-2  rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 "
                >
                  <div className="flex items-center space-x-3">
                    <p className="bg-card-foreground text-sm p-2 rounded">OK</p>
                    <div>
                      <p className="font-semibold text-sm mb-1">
                        CryptoKing{" "}
                        <span className="text-gray-500 font-medium">
                          +2.3% 2 min ago
                        </span>
                      </p>

                      <p className="text-gray-500 text-xs 2xl:text-sm">
                        BTC/USD $61,245.00
                        <span className="text-green-500 dark:bg-green-800/20 bg-green-100 rounded-full px-3 py-1 ml-3 text-xs">
                          Buy{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className=" border px-3 rounded-full py-1 text-xs 2xl:text-sm font-medium">
                    Copy
                  </button>
                </div>
              ))}
              <button className=" bg-card rounded-full border w-full py-2 capitalize text-xs 2xl:text-sm font-semibold">
                view all trades
              </button>
            </div>
          </div>

          {/* Trading master */}
          <div className="bg-card-foreground rounded-[10px] border p-4">
            <h2 className="text-lg 2xl:text-xl font-semibold mb-2">
              Trading Master
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Traders With The Best Performance
            </p>

            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center bg-card justify-between p-2  rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 "
                >
                  <div className="flex items-center space-x-3">
                    <p className="bg-card-foreground text-sm p-2 rounded">OK</p>
                    <div>
                      <p className="font-semibold text-sm mb-1">CryptoKing </p>

                      <p className="text-gray-500 text-xs 2xl:text-sm">
                        Win: 82%
                        <span className="text-green-500 dark:bg-green-800/20 bg-green-100 rounded-full px-3 py-1 ml-3 text-xs">
                          +12.4%{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className=" border px-2 rounded-full py-1 text-xs font-medium">
                      Follow
                    </button>
                    <button className=" border px-2 rounded-full py-1 text-xs font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>
              ))}
              <button className=" bg-card rounded-full border w-full py-2 capitalize text-xs 2xl:text-sm font-semibold">
                view all trades
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialTradingFeed;
