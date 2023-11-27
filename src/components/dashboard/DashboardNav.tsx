import React from "react";
import DropDown from "../AuthDropdown";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    Home,
    LogOut,
    Mail,
    MailPlus,
    MoreHorizontal,
    Receipt,
    Settings,
    User2,
} from "lucide-react";
import Link from "next/link";
import { KvikkLogo } from "@/assets/Logo";
import Hamburger from "./Hamburger";
import { Separator } from "../ui/separator";
import { SignOutLink } from "../authButtons";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "@/lib/auth";
import { Button } from "../ui/button";

type Props = {};

export type Link = {
    name: string;
    href: string;
    icon: any;
}

export const links : Link[] = [
    {
        name: "Overview",
        href: "/",
        icon: Home,
    },
    {
        name: "Your Drafts",
        href: "/emails",
        icon: Mail,
    },
    {
        name: "Pricing",
        href: "/pricing",
        icon: Receipt,
    },
    {
        name: "Generate Email",
        href: "/Email",
        icon: MailPlus,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings,
    },
];



export default async function DashboardNav({}: Props) {
    const session = await getServerSession(authConfig);

    return (
        <header className="w-full md:w-[250px] border-b p-6 h-20 md:h-screen items-center md:items-stretch sticky z-50 flex flex-row justify-between md:flex-col gap-20 bg-[#171718] top-0 left-0 md:border-r border-stone-800">
            <KvikkLogo className="w-20 fill-gray-300" />
            <div className="hidden md:flex flex-col justify-between h-full">
                <nav className="flex flex-col gap-4 text-sm">
                    {links.map((link) => (
                        <Link
                            href={link.href}
                            key={link.name}
                            className="p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-gray-800"
                        >
                            <link.icon className="w-4 h-4" />
                            {link.name}
                        </Link>
                    ))}
                    <Button className="bg-purple-700 rounded-full flex gap-2 items-center  hover:bg-purple-500">
                        <MailPlus className="w-4 h-4" />
                        Generate Email
                    </Button>
                </nav>

                <DropDown>
                    <Avatar className="w-7 h-7">
                        <AvatarImage src={session?.user?.image!} />
                        <AvatarFallback className="text-gray-800">
                            {session?.user?.name
                                ? session?.user?.name[0]
                                : session?.user?.email![0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="truncate text-sm">
                        mats.fjeldstad@outlook.com
                    </div>
                    <MoreHorizontal />
                </DropDown>
            </div>
            <Hamburger />
        </header>
    );
}
