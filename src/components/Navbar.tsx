import { KvikkLogo } from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import { LogedInButton } from "./NavButton";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <header className=" p-10 bg-[#010821]/[0.30] backdrop-blur-xl  fixed top-0 z-20 w-screen left-0 h-20 text-white ">
            <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <KvikkLogo className="h-20 fill-white" />
                </Link>
                <div className="flex gap-10">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/about"}>What is Kvikk</Link>
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/faq"}>FAQ</Link>
                </div>
                <LogedInButton />
            </div>
        </header>
    );
}
