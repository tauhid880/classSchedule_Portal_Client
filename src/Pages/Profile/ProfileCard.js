import React from "react";
import { MdEmail } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import { BsFilePersonFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import ID from "../../assets/id.png";
import Department from "../../assets/department.png";
const ProfileCard = ({ user }) => {
  const { name, email, facultyId, image, designation } = user;
  return (
    <div className="relative lg:top-32 md:top-40 top-20">
      <section className="flex flex-col items-center justify-center">
        <div className=" rounded-md shadow-xl lg:h-2/4 p-5 grid grid-cols-1 content-center justify-items-center gap-3 bg-gradient-to-t from-[#BAD7E9] to-[#EDEDED] hover:bg-[#F7EFE5] my-5 border-t-[#FF9F9F] border-t-4">
          <div className="avatar">
            <div className="lg:w-40 w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="object-fill" alt="Profile" src={image} />
            </div>
          </div>
          <p className="text-black lg:text-lg text-sm m-2 lg:m-1">
            <span className="font-semibold">{name}</span>
          </p>
          <div className="flex flex-col justify-end items-start ">
            <div className="flex justify-between items-center gap-2 my-1">
              <span className=" text-xl p-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl">
                <MdEmail className="text-black"></MdEmail>
              </span>
              <p className="text-black lg:text-lg text-sm m-2 lg:m-1 ">
                {email}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 my-1">
              <span className=" text-xl p-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl">
                <img alt="" className="h-5 w-5" src={ID}></img>
              </span>
              <p className="text-black lg:text-lg text-sm m-2 lg:m-1 ">
                {facultyId}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 my-1">
              <span className=" text-xl p-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl">
                <BsFilePersonFill className="text-black"></BsFilePersonFill>
              </span>
              <p className="text-black lg:text-lg text-sm m-2 lg:m-1 ">
                {designation}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 my-1">
              <span className=" text-xl p-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl">
                <img alt="" className="h-5 w-5" src={Department}></img>
              </span>
              <p className="text-black lg:text-lg text-sm m-2 lg:m-1 ">
                Computer Science & Engineering
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;
