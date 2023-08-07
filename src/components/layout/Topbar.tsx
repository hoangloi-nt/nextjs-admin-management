import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNofitication, IconSearch } from "../icons";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4 bg-grayfc">
      <div className="flex items-center gap-[82px] flex-1">
        <Logo />
        <Search />
      </div>
      <User />
    </div>
  );
};

export default Topbar;

function Logo({}) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.svg" alt="Yariga" width={173} height={35} priority />
    </Link>
  );
}

function Search({}) {
  return (
    <div className="px-[10px] rounded-lg bg-grayf4 flex items-center gap-2 flex-[0_1_405px] h-[38px]">
      <IconSearch></IconSearch>
      <input
        type="text"
        placeholder="Search Property, Customer etc"
        className="w-full text-xs font-normal bg-transparent outline-none placeholder:text-gray80 text-primaryText"
      />
    </div>
  );
}

function User({}) {
  return (
    <div className="flex items-center flex-shrink-0 gap-5">
      <span className="flex-shrink-0">
        <IconNofitication></IconNofitication>
      </span>
      <div className="flex items-center flex-shrink-0 gap-[10px]">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="user avatar"
          width={40}
          height={40}
          className="object-cover w-10 h-10 rounded-full"
        ></Image>
        <div className="flex flex-col">
          <h4 className="font-semibold">Hawkins Maru</h4>
          <span className="text-gray80">Company Manager</span>
        </div>
      </div>
    </div>
  );
}
