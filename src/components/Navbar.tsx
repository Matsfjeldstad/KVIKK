import { KvikkLogo } from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LogedInButton } from "./NavButton";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <header className=" p-10 bg-white/[0.0001] backdrop-blur-xl  fixed top-0 z-20 w-screen left-0 h-20 text-white ">
            <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-between">
                <KvikkLogo className="h-20 fill-white" />
                <div className="flex gap-10">
                    <Link href={""}>Home</Link>
                    <Link href={""}>What is Kvikk</Link>
                    <Link href={""}>Pricing</Link>
                    <Link href={""}>FAQ</Link>
                </div>
                <LogedInButton />
            </div>
        </header>
    );
}
