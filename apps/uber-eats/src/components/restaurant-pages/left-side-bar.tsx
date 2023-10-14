import { BeakerIcon, FolderOpenIcon, LogoutIcon, MapIcon, SearchCircleIcon, SearchIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ChatAlt2Icon,
  HeartIcon,
  ClipboardListIcon,
  CogIcon,
  CashIcon,
} from "@heroicons/react/outline";
import useAuth from "../../hooks/use-auth";
import { UserContext, UserContextType } from "../../hooks/user-context";
import { FaMapMarked } from "react-icons/fa";
const icon_style = "h-6 w-6 text-gray-500 hover:text-white";

export const LeftBarRoutes = [
  {
    id: 1,
    name: "Home",
    route: "/",
    icon: <HomeIcon className={icon_style} />,
  },
  {
    id: 2,
    name: "Chat",
    route: "/eats/chat",
    icon: <ChatAlt2Icon className={icon_style} />,
  },
  {
    id: 10,
    name: "Search",
    route: "/search",
    icon: <SearchIcon className={icon_style} />,
  },
  {
    id: 9,
    name: "Restaurants",
    route: "/eats/restaurants",
    icon: <FolderOpenIcon className={icon_style} />,
  },
  {
    id: 3,
    name: "Wallet",
    route: "/eats/wallet",
    icon: <CashIcon className={icon_style} />,
  },
  {
    id: 3,
    name: "Track",
    route: "/eats/track",
    icon: <FaMapMarked className={icon_style} />,
  },
  {
    id: 4,
    name: "Orders",
    route: "/eats/checkout",
    icon: <ShoppingBagIcon className={icon_style} />,
  },
  {
    id: 5,
    name: "Favorite",
    route: "/favorite",
    icon: <HeartIcon className={icon_style} />,
  },
  {
    id: 6,
    name: "Settings",
    route: "/settings",
    icon: <CogIcon className={icon_style} />,
  },
];
export default function LeftSideBar() {
  const navigation = useNavigate();
  const { logoutUser } = useAuth();

  const { user, setUser } = useContext(UserContext) as UserContextType;
  return (
    <>
      <div className="p-5 border-l-2 w-28 h-screen bg-white fixed shadow-md">
        <div className="space-y-4">
          {LeftBarRoutes.map((item, index) => {
            return (
              <div
                key={index}
                className="w-16 h-16 hover:bg-gradient-to-r bg-transparent from-orange-500 to-orange-500 hover:shadow-2xl flex justify-center items-center rounded-full"
                onClick={() => navigation(item?.route)}
              >
                {/* icon button */}
                {item?.icon}
              </div>
            );
          })}
        </div>

        <div onClick={() => logoutUser()}
          className=" w-16 h-16 hover:bg-gradient-to-r bg-transparent from-orange-500 to-orange-500 
                 flex justify-center items-center rounded-full absolute bottom-2"
        >
          <LogoutIcon className="h-6 w-6 text-gray-500 hover:text-white" />
        </div>
      </div>
    </>
  );
}

