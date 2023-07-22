import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants/constants";
import AuthProviders from "./AuthProviders";

const NavBar = () => {
  const session = {};
  return (
    <nav className="flex flex-between items-center py-5 px-8 border-b border-nav-border gap-4">
      <div className="flex flex-start items-center flex-1 gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="flexibble-logo"
            width={115}
            height={43}
          ></Image>
        </Link>
        <ul className="hidden text-small xl:flex gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
        {session ? (
          <>
            <Link href="/">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
