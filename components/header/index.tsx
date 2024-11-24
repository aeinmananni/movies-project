"use client";
import Link from "next/link";
import style from "./style.module.css";
import { MdOutlineLocalMovies } from "react-icons/md";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="w-full flex justify-between duration-500  mx-auto h-20 bg-pink-600   text-white">
      <span className={`${style.sp} rounded-l-md`}>
        <span className="text-lg">{"سینما"}</span>
      </span>
      <div className="w-full h-full border-2 border-purple-800 flex items-center px-2">
        <Link
          href={"about"}
          className={`flex justify-center items-center ${
            pathname === "/about"
              ? "text-yellow-200 border-b-2 border-yellow-200 h-full"
              : "text-gray-200 border-b-2 border-pink-600"
          }`}
        >
          درباره ما
        </Link>
      </div>
      <span className={`${style.sp} rounded-r-md`}>
        <MdOutlineLocalMovies size={40} className="-rotate-45" />
      </span>
    </div>
  );
}
