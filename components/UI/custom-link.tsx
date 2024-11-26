"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type CustomLinkProps = {
  to?: string;
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

const CustomLink = ({ className, children, to, ...props }: CustomLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={`flex justify-center items-center h-full ${
        pathname === to
          ? "text-yellow-200 border-b-2 border-yellow-200 "
          : "text-gray-200 border-b-2 border-pink-600"
      } duration-300 transition-all ${className}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
