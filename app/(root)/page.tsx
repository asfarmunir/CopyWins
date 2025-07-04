"use client";
import { CreatePostDialog } from "@/components/shared/CreatePost";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { FaRegClock } from "react-icons/fa6";

const SocialTradingFeed = () => {
  const [activeTab, setActiveTab] = React.useState("All");
  return (
    <div className="w-full bg-card  rounded-[10px] border p-3 2xl:p-4 3xl:p-5">
      {/* Header with search and create post button */}
      <div className="w-full flex items-center border-b mb-4 2xl:mb-5 border-[#E3E3E4] dark:border-[#0F2430] pb-4 justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={35}
            height={35}
            priority
            className="md:hidden"
          />

          <h2 className="text-lg 2xl:text-xl font-semibold">Feed</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block border-r pr-4">
            <input
              type="text"
              placeholder="Search traders"
              className="pl-9 pr-4 py-2 bg-card-foreground border-[#E3E3E4] dark:border-slate-800 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary text-sm 3xl:text-base w-64"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Image
                src="/icons/search.svg"
                alt="Search Icon"
                width={16}
                height={16}
                className="dark:invert"
              />
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              Latest
              <ChevronDown className="ml-1 h-4 w-4 text-gray-500 inline-block" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <CreatePostDialog />
          {/* <ProfileDialog /> */}
        </div>
      </div>

      <div className=" w-full  flex flex-col gap-2 2xl:gap-4 max-w-6xl 3xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 2xl:gap-6">
          <div className="lg:col-span-3 space-y-4 2xl:space-y-6">
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
              <div key={index} className="bg-card rounded-[10px] border ">
                <div className=" p-4 pb-6 bg-card-foreground">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-md bg-[#0C9DFF] flex items-center justify-center ">
                        <p className=" font-semibold text-white">SC</p>
                      </div>{" "}
                      <div>
                        <h3 className="font-semibold text-sm mb-0.5 capitalize">
                          sandro carossela · @UWSMC
                        </h3>
                        <p className="text-gray-500 text-xs">
                          16 Dec at 6:43 pm
                        </p>
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
                </div>
                <div className="flex items-center justify-between  border-[#E3E3E4] dark:border-[#0F2430] p-4 pt-6 mb-2">
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

          <div className="lg:col-span-2 space-y-4 2xl:space-y-6">
            {/* Live trade feed */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-1 bg-card-foreground rounded-full w-full p-1">
                {["All", "Trading", "Sports"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 rounded-full flex-1 text-sm font-semibold transition ${
                      activeTab === tab
                        ? "bg-card text-foreground shadow-sm"
                        : "text-gray-500 dark:text-gray-300 hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-card-foreground rounded-[10px] border p-2 md:p-4">
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
                      <p className="bg-card-foreground text-sm p-2 rounded">
                        OK
                      </p>
                      <div>
                        <p className="font-semibold text-sm mb-1">
                          CryptoKing{" "}
                        </p>

                        <p className="text-gray-500 text-xs ">
                          BTC/USD $61,245.00
                          <span className="text-green-700 dark:bg-green-800/20 bg-green-50 font-semibold rounded-full px-3 py-1 ml-3 text-xs">
                            Buy{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col  items-start md:items-end">
                        <p className="text-green-500 font-medium">+2.3%</p>
                        <p className="text-gray-500 font-medium text-xs">
                          <FaRegClock className=" md:inline-block mr-1 hidden " />
                          +22 min ago
                        </p>
                      </div>
                      <button className=" border px-3 rounded-full py-1 text-xs 2xl:text-sm font-medium">
                        Copy
                      </button>
                    </div>
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
                      <p className="bg-card-foreground text-sm p-2 rounded">
                        OK
                      </p>
                      <div>
                        <p className="font-semibold text-sm mb-1">
                          CryptoKing{" "}
                        </p>

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
                      <button className=" border px-2 bg-primary text-white rounded-full py-1.5 text-xs font-semibold">
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
    </div>
  );
};

export default SocialTradingFeed;
