import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiUserCircle, HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsCalendarCheck } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import {
  MdOutlineWysiwyg,
  MdLogout,
  MdPersonSearch,
  MdAddComment,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AuthContext } from "../Contexts/AuthProvider";
const DashboardLayout = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  const menus = [
    { name: "Profile", link: "/dashboard/profile", icon: HiUserCircle },
    { name: "Add Class", link: "/dashboard/addclass", icon: MdOutlineWysiwyg },
    {
      name: "Add Message",
      link: "/dashboard/addmessage",
      icon: MdAddComment,
    },
    {
      name: "Messages",
      link: "/dashboard/messages",
      icon: HiChatBubbleBottomCenterText,
    },
    {
      name: "Schedules",
      link: "/dashboard/schedule",
      icon: BsCalendarCheck,
    },
    {
      name: "All Teachers",
      link: "/dashboard/allteachers",
      icon: MdPersonSearch,
    },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex min-h-screen">
      <div
        className={`bg-[#191825] ${
          open ? "lg:w-72 w-16" : "w-16"
        } duration-500 text-gray-100  `}
      >
        <Link className="lg:visible invisible" to="/dashboard">
          <img
            alt=""
            src={Logo}
            className={`p-2 bg-[#fff8f395] lg:visible invisible ${
              !open && "invisible "
            }`}
          />
        </Link>
        <div className=" p-3 flex flex-col gap-3 relative">
          <Link
            onClick={() => setOpen(!open)}
            className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
          >
            <div className=" flex justify-start">
              <HiMenu size={20} className="cursor-pointe" />
            </div>
            <h2
              // style={{
              //   transitionDelay: `${0 + 3}00ms`,
              // }}
              className={`whitespace-pre duration-500 lg:visible invisible ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Menu
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Menu
            </h2>
          </Link>
          {menus?.map((menu, index) => (
            <Link
              to={menu?.link}
              key={index}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                // style={{
                //   transitionDelay: `${index + 3}00ms`,
                // }}
                className={`whitespace-pre duration-500 
                ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                } lg:visible invisible`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          <Link
            onClick={handleLogOut}
            className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
          >
            <div>{React.createElement(MdLogout, { size: "20" })}</div>
            <h2
              // style={{
              //   transitionDelay: `${5 + 3}00ms`,
              // }}
              className={`whitespace-pre duration-500 lg:visible invisible ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Log Out
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Log Out
            </h2>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default DashboardLayout;
