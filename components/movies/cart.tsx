import Images from "../UI/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
type CartProps = {
  imageSrc?: StaticImport | string;
};

export default function Cart({ imageSrc }: CartProps) {
  return (
    <div className=" overflow-hidden h-72 border border-pink-600 rounded-md before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-sky-800 relative before:bg-opacity-25 group before:opacity-0 before:hover:opacity-100 before:transition-all before:duration-500 before:z-10">
      <Images
        src={imageSrc ?? ""}
        alt=""
        className="h-full object-fill group-hover:scale-105 transition-all duration-500 group-hover:rotate-2"
      />
    </div>
  );
}
