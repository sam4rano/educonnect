"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SearchItem from "../components/SearchItem";
import { ThemeSwitcher } from "./themeSwitcher";

interface NavData {
  id: number;
  name: string;
  path?: string; // For navigation links
  component?: ReactNode; // For components like HiOutlineMenu
}

const navData: NavData[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Tags",
    path: "/tags",
  },
  {
    id: 4,
    name: "Questions",
    path: "/questions",
  },
  {
    id: 5,
    name: "Register",
    path: "/register",
  },
  {
    id: 6,
    name: "search",
    component: <SearchItem />,
  },
];

export default function Navbar() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 85) {
            setActive(true);
          } else {
            setActive(false);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = useCallback((path: string) => pathname === path, [pathname]);
  return (
    <div
      className={`${
        active
          ? " dark:bg-white fixed top-0 left-0  w-full z-40  shadow-xl transition duration-500"
          : "w-full  z-40 "
      }`}
    >
      <header className="flex flex-row justify-between mx-auto align-middle h-16 w-full shrink-0 items-center px-4 md:px-6 font-kanit bg-white dark:bg-gray-800">
        <Link href={"/"}>
          <h2 className="text-3xl ">EduConnect</h2>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden xl:hidden"
            >
              <HiOutlineMenu className="h-6 w-6" />

              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
              <HiOutlineMenu className="h-6 w-6" />
              <span className="sr-only">EduConnect</span>
            </Link>
            <div className="grid gap-2 py-6">
              {navData.map((data) => (
                <ul key={data.id} className="list-none">
                  {data.path ? (
                    <Link
                      href={data.path}
                      className={`group inline-flex h-9 w-max items-center justify-center rounded-md text-lg bg-white dark:bg-gray-800 px-4 py-2 font-kanit ${
                        isActive(data.path)
                          ? "text-blue-500"
                          : "text-black dark:text-white"
                      }  `}
                      prefetch={false}
                    >
                      {data.name}
                    </Link>
                  ) : (
                    <Button asChild variant="secondary">
                      {data.component}
                    </Button>
                  )}
                </ul>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href={"/"} className="mr-6 hidden xl:flex" prefetch={false}>
          <span className="sr-only text-3xl">eduConnect</span>
        </Link>
        <nav className="ml-auto hidden xl:flex lg:flex gap-6">
          {navData.map((data) => (
            <ul key={data.id} className="list none">
              {data.path ? (
                <Link
                  href={data.path}
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md text-lg bg-white dark:bg-black px-4 py-2 ${
                    isActive(data.path)
                      ? "text-blue-500"
                      : "text-black dark:text-white"
                  }  `}
                  prefetch={false}
                >
                  {data.name}
                </Link>
              ) : (
                <Button asChild className="bg-black text-white">
                  {data.component}
                </Button>
              )}
            </ul>
          ))}
        </nav>
        <ThemeSwitcher />
      </header>
    </div>
  );
}
