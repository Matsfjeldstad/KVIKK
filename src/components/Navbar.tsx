import { KvikkLogo } from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import { LogedInButton } from "./NavButton";
import MobileNav from "./MobileNav";

type Props = {};

type Link = {
    name: string;
    href: string;
};

export const links: Link[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "What is Kvikk",
        href: "/about",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
];

export default function Navbar({}: Props) {
    return (
        <header className=" p-10 bg-[#010821]/[0.30] backdrop-blur-xl  fixed top-0 z-20 w-screen left-0 h-20 text-white ">
            <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-between">
                <Link href={"/"} className="relative z-[100]">
                    <KvikkLogo className="h-20 fill-white" />
                </Link>
                <div className="hidden gap-10 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-gray-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                <MobileNav />
                </div >
                <div className="hidden md:flex">
                    <LogedInButton />
                </div>
            </div>
        </header>
    );
}
