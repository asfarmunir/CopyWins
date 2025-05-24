"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { FiUser, FiCalendar, FiMapPin, FiMoreHorizontal } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

export const ProfileDialog = () => {
  const [tab, setTab] = useState("posts");
  return (
    <Dialog>
      <DialogTrigger className="text-primary hover:underline">
        View Profile
      </DialogTrigger>
      <DialogContent className="max-w-[90%]    rounded-lg">
        <DialogHeader className=" pt-5 px-4 2xl:px-6">
          <DialogTitle className="text-left text-xl font-bold pb-4 border-b">
            Profile
          </DialogTitle>
        </DialogHeader>

        <div className=" flex  w-full ">
          <div className="">
            <div className="flex flex-col  items-center">
              <div className=" w-full h-40">
                <Image
                  src={"/profile-bg.svg"}
                  alt="Profile"
                  width={1000}
                  height={400}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-col -mt-12  items-center">
                <div className=" w-28 h-28 rounded-full border-2 border-white dark:border-slate-800 bg-primary"></div>
                <h2 className="text-xl font-semibold inline-flex items-center gap-3">
                  Sandro Carossela
                  <MdVerified color="green" />
                </h2>
                <p className="text-gray-500">@UWSMC</p>
              </div>
              <div className="flex gap-2 my-3">
                <button className="px-6 py-2 bg-primary text-white rounded-full text-sm">
                  Follow
                </button>
                <button className="px-4 py-2 bg-card     border rounded-full text-sm">
                  Subscribe
                </button>
                <button className="px-4 py-2 bg-card     border rounded-full text-sm">
                  Leave a tip
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center  items-center gap-7 my-4">
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg 2xl:text-xl">142</span>{" "}
                <span className="text-gray-500">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg 2xl:text-xl">32K</span>{" "}
                <span className="text-gray-500">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg 2xl:text-xl">117</span>{" "}
                <span className="text-gray-500">Following</span>
              </div>
            </div>

            {/* Location and Join Date */}
            <div className="flex items-center justify-center  gap-4 text-sm 2xl:text-base text-gray-600 dark:text-slate-100">
              <div className="flex items-center gap-1">
                <FiMapPin size={14} />
                <span>View, York, USA</span>
              </div>
              <div className="flex items-center gap-1">
                <FiCalendar size={14} />
                <span>Joined Jan 2022</span>
              </div>
            </div>
          </div>
          <div className="  p-4 2xl:px-6  overflow-y-auto h-[85svh] no-scrollbar  ">
            <nav className="flex gap-4 ">
              <button
                className={`px-4 rounded-full text-xs 2xl:text-sm border py-2
                ${
                  tab === "posts"
                    ? "bg-[#E3E3E4] dark:bg-slate-500/40 font-semibold"
                    : "text-gray-500 dark:text-slate-200"
                }
                `}
                onClick={() => setTab("posts")}
              >
                Posts
              </button>
              <button
                className={`px-4 rounded-full text-xs 2xl:text-sm border py-2
                    ${
                      tab === "Client Reviews"
                        ? "bg-[#E3E3E4] font-semibold"
                        : "text-gray-500 dark:text-slate-200"
                    }
                    `}
                onClick={() => setTab("Client Reviews")}
              >
                Client Reviews
              </button>
              <button
                className={`px-4 rounded-full text-xs 2xl:text-sm border py-2
                    ${
                      tab === "Premium content"
                        ? "bg-[#E3E3E4] font-semibold"
                        : "text-gray-500 dark:text-slate-200"
                    }
                    `}
                onClick={() => setTab("Premium content")}
              >
                Premium content
              </button>
              <button
                className={`px-4 rounded-full text-xs 2xl:text-sm border py-2
                    ${
                      tab === "Signal history"
                        ? "bg-[#E3E3E4] font-semibold"
                        : "text-gray-500 dark:text-slate-200"
                    }
                    `}
                onClick={() => setTab("Signal history")}
              >
                Signal history
              </button>
              <button
                className={`px-4 rounded-full text-xs 2xl:text-sm border py-2
                    ${
                      tab === "About"
                        ? "bg-[#E3E3E4] font-semibold"
                        : "text-gray-500 dark:text-slate-200"
                    }
                    `}
                onClick={() => setTab("About")}
              >
                About
              </button>
            </nav>

            <div className="mt-4 space-y-6">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="bg-card rounded-[10px] border p-4">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
