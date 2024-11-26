import style from "./style.module.css";
import { MdOutlineLocalMovies } from "react-icons/md";
import CustomLink from "../UI/custom-link";
export default function Header() {
  return (
    <div className="w-full flex justify-between duration-500  mx-auto h-20 bg-pink-600   text-white">
      <span className={`${style.sp} rounded-l-md`}>
        <span className="text-lg">{"سینما"}</span>
      </span>
      <div className="w-full h-full  flex items-center gap-4 px-2">
        <CustomLink href={"/"} to="/">
          صفحه اصلی
        </CustomLink>
        <CustomLink href={{ pathname: "blog", search: "?log=2" }} to="/blog">
          وبلاگ
        </CustomLink>
        <CustomLink href={"about"} to="/about">
          درباره ما
        </CustomLink>
      </div>
      <span className={`${style.sp} rounded-r-md`}>
        <MdOutlineLocalMovies size={40} className="-rotate-45" />
      </span>
    </div>
  );
}
