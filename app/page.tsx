import React from "react";
import { TiSocialFlickr } from "react-icons/ti";
import { RiHome7Line } from "react-icons/ri";
import { FaHashtag, FaMoneyCheckAlt } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

const inter = Inter({ subsets: ["latin"] });

interface SidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: SidebarButton[] = [
  {
    title: "Home",
    icon: <RiHome7Line />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <FaRegBell />,
  },
  {
    title: "Message",
    icon: <MdOutlineMessage />,
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark />,
  },
  {
    title: "Blue",
    icon: <FaMoneyCheckAlt />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        {/* Left Sidebar */}
        <div className="col-span-3 pt-1 px-1 ml-15">
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <TiSocialFlickr />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-full cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-4">
              <button className="bg-[#1d9bf0] font-semibold py-3 px-4 rounded-full w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section - Feed */}
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-b-0 overflow-y-scroll overflow-x-auto h-screen border-gray-800">
          {/* Feed Cards */}
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 h-screen overflow-hidden"></div>
      </div>
    </div>
  );
}
