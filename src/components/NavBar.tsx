"use client";

import Logo from "@/assets/img/logo.png";
import { Hamburger } from "@/assets/svg/Hamburger";

import { Menu } from "./Menu";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { paramsIntoText } from "@/app/(routes)/utils/strings";
import { Navigation } from "@/sanity/types";

export function NavBar({ navigation }: { navigation?: Navigation }) {
  const [showMenu, setShowMenu] = useState(false);
  const [breadCrumbs, setBreadCrumbs] = useState("");
  const { slug } = useParams();
  const pathname = usePathname();

  function getFirstParamsSection(pathname: string) {
    const match = pathname.match(/^\/([^/]+)/);
    return match ? match[1].replace(/-/g, " ") : "";
  }

  useEffect(() => {
    if (pathname.includes("collection")) {
      setBreadCrumbs(paramsIntoText(slug));
    } else {
      setBreadCrumbs(getFirstParamsSection(pathname));
    }
  }, [pathname, slug]);
  

  const handleOnClick = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className="main-nav w-full content-center p-4 z-3">
        <section className="flex mx-auto content-center justify-between items-center w-full">
          <Link
            href="/"
            className={breadCrumbs ? 'logo' : 'logo-alone'}
          >
            <span className="hidden sm:block">
              <Image width={190} height={500} src={Logo} alt="Alice Mariano logo" />
            </span>
            <span className="sm:hidden">
              <Image width={150} height={500} src={Logo} alt="Alice Mariano logo" />
            </span>
          </Link>
          {breadCrumbs && (
            <h2 className="flex-1 accent-font text-3xl hidden lg:block text-center" style={{ paddingTop: '0.5rem' }}>
              {breadCrumbs}
            </h2>
          )}
          <button
            className={`justify-self-end menu-icon p-4 ${showMenu && "hidden"}`}
            onClick={handleOnClick}
          >
            <Hamburger />
          </button>
        </section>
        <Menu
          navigation={navigation}
          isOpen={showMenu}
          handleClose={handleOnClick}
          />
      </nav>
      {breadCrumbs && (
          <h2 className="py-5 pb-2 flex-1 accent-font text-2xl lg:hidden text-center" style={{ paddingTop: '1rem' }}>
            {breadCrumbs}
          </h2>
        )}
    </>
  );
}
