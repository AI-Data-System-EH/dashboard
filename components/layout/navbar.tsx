"use client";

import useScroll from "@/lib/hooks/use-scroll";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import ButtonRound from "../common/button-round";
import DarkModeButton from "../common/button-theme";

export default function Navbar({ session }: { session: Session | null }) {
    const scrolled = useScroll(50);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div
                className={`z-30
                    animate-fade-down
                    top-0 fixed flex justify-center
                    w-full h-auto py-5
                    transition-all duration-300
                    ${
                        scrolled
                            ? `{ backdrop-blur-xl
                            bg-off-white/50 dark:bg-matte-black/50 }`
                            : "bg-off-white/0 dark:bg-matte-black/0"
                    }`}
            >
                <div
                    className="flex
                        mx-5 gap-5
                        w-full max-w-screen-xl
                        justify-between
                        "
                >
                    {/* Logo */}
                    <Image
                        onClick={scrollToTop}
                        src="/CI/logo_long.png"
                        alt="logo_long"
                        width="300"
                        height="50"
                        className={`-ml-2
                            flex items-center cursor-pointer
                            transition-colors duration-300 ease-in
                            ${
                                scrolled
                                    ? `{
                                        filter grayscale hover:filter-none
                                        dark:brightness-[350%]
                                        dark:hover:contrast-[2.5]
                                    }`
                                    : `{
                                        filter-none
                                        dark:brightness-150
                                        dark:hover:contrast-[1.2]
                                    }`
                            }
                            `}
                    ></Image>

                    {/* Navigation */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/about"
                            className="text-base
                                    transition-all
                                    hover:text-black dark:hover:text-white"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-base
                                    transition-all
                                    hover:text-black dark:hover:text-white"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-base
                                    transition-all
                                    hover:text-black dark:hover:text-white"
                        >
                            Contact
                        </Link>
                        {/* User Dropdown */}
                        {session ? (
                            // <UserDropdown session={session} />
                            <ButtonRound
                            // onClick={() => signOut()}
                            >
                                Sign Out
                            </ButtonRound>
                        ) : (
                            <ButtonRound
                            // onClick={() => setShowSignInModal(true)}
                            >
                                Sign In
                            </ButtonRound>
                        )}
                        {/* Dark Mode Toggle */}
                        <DarkModeButton />
                    </div>
                </div>
            </div>
        </>
    );
}
