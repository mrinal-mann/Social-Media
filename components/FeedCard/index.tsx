import React from "react";
import Image from "next/image";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 p-5 hover:bg-slate-800 transition-all cursor-pointer ">
      <div className="grid grid-cols-12 gap-3">
        {/* User Image */}
        <div className="col-span-1">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
            height={40}
            width={40}
            alt="User image"
          />
        </div>

        {/* User Content */}
        <div className="col-span-11 overflow-hidden">
          <h5>Mrinal Manna</h5>
          <p>
            Hi, I'm Mrinal, a full stack developer who loves coding. I am making
            a social media platform. @mrinal
          </p>

          {/* Action Icons */}
          <div className="flex justify-between mt-5 text-xl items-center w-[95%]">
            <AiOutlineMessage />
            <FaRetweet />
            <CiHeart />
            <MdOutlineFileUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
