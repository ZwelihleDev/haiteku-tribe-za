import { NavigationLinks } from "@/constants";
import HaitekuLogo from "../public/images/Haiteku_Tribe_Logo_Yellow.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getCurrentUser } from "@/lib/session";
import Button from "./Button";
import AuthProviders from "./AuthProviders";
import ProfileMenu from "./ProfileMenu";

const NavigationBar = async () => {

    const session = await getCurrentUser()
  return (
    <nav className="flex justify-between items-center py-5 px-8 border-b border-white gap-4">
      <div className="flex-1 flex items-center justify-start gap-10">
        <Link href={"/"}>
          <Image
            alt="Logo"
            src={HaitekuLogo}
            width={200}
            height={50}
            quality={100}
            priority
          />
        </Link>

        <ul className="xl:flex hidden text-base gap-7 text-white ">
          {NavigationLinks.map((link) => (
            <Link
              href={link.href}
              key={link.text}
              className="hover:text-primaryYellow"
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className='flex justify-center items-center gap-4'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            <Link href="/create-project">
              <Button title='Share work' />
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
