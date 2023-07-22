import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants/constants";
import { link } from "fs";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => {
  return (
    <div className="flex flex-col flex-1 gap-3 text-sm min-w-max">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start items-center w-full gap-20 bg-light-white py-6 px-5 lg:px-20 ">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col items-start">
          <Image
            src="/logo-purple.svg"
            alt="flexibble-logo"
            width={115}
            height={38}
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((link) => (
            <FooterColumn title={link.title} links={link.links} />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full text-sm font-normal max-sm:flex-col">
        <p>@ 2023 Flexibble. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">11,032 </span>
          projects submitted.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
