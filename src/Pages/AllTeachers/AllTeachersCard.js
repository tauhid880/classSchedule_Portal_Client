import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import ID from "../../assets/id.png";
import Department from "../../assets/department.png";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const AllTeachersCard = ({ user }) => {
  const { name, email, facultyId, image, designation } = user;
  return (
    <section className="relative">
      <div className="w-[250px] lg:w-[350px] h-[320px] lg:h-[400px] rounded-md shadow-lg p-6 lg:p-10  bg-gradient-to-t from-[#BAD7E9] to-[#EDEDED] hover:bg-[#F7EFE5]  border-t-[#FF9F9F] border-t-4">
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="avatar">
            <div className="lg:w-30 w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="object-fill" alt="Profile" src={image} />
            </div>
          </div>
          <div className="">
            <p className="text-black lg:text-base text-sm my-2 lg:m-1">
              <span className="font-semibold">{name}</span>
            </p>
            {/* <Link>
              <MdDelete className="text-xl font-semibold text-rose-400"></MdDelete>
            </Link> */}
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-end items-start my-3">
          <div className="flex justify-between items-center gap-2 my-1">
            <span className="text-lg p-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl">
              <MdEmail className="text-black"></MdEmail>
            </span>
            <p className="text-black lg:text-lg text-xs lg:m-1 ">{email}</p>
          </div>
          <div className="flex justify-between items-center gap-2 my-1">
            <span className=" text-lg p-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl">
              <img alt="" className="h-5 w-5" src={ID}></img>
            </span>
            <p className="text-black lg:text-lg text-xs m-2 lg:m-1 ">
              {facultyId}
            </p>
          </div>
          <div className="flex justify-between items-center gap-2 my-1">
            <span className=" text-lg p-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl">
              <BsFilePersonFill className="text-black"></BsFilePersonFill>
            </span>
            <p className="text-black lg:text-lg text-xs lg:m-1 ">
              {designation}
            </p>
          </div>
          <div className="flex justify-between items-center gap-2 my-1">
            <span className=" text-lg p-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl">
              <img alt="" className="h-5 w-5" src={Department}></img>
            </span>
            <p className="text-black lg:text-lg text-xs lg:m-1 ">
              Computer Science & Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTeachersCard;
