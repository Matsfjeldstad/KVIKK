"use client";
import React, { Children } from "react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Link as LinkIcon, LogOut, Receipt, Settings, UserCircle2 } from "lucide-react";

type Props = {
    children: React.ReactNode;
};

export default function DropDown({ children }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="py-1 px-3 rounded-md relative flex items-center gap-2 duration-100 text-gray-200 hover:bg-gray-800 ">
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-stone-900 text-gray-200 border-stone-600 min-w-[200px]">
                <Link href="/dashboard">
                    <DropdownMenuItem className="flex gap-2 items-center">
                        <UserCircle2 className="w-4 h-4" />
                        Dashboard
                    </DropdownMenuItem>
                </Link>
                <Link href={"/home"}>
                    <DropdownMenuItem className="flex gap-2 items-center">
                        <LinkIcon className="w-4 h-4" />
                        Homepage
                    </DropdownMenuItem>
                </Link>
                <Link href={"/settings/account"}>
                    <DropdownMenuItem className="flex gap-2 items-center">
                        <Settings className="w-4 h-4" /> Settings
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                    onClick={() => signOut()}
                    className="flex gap-2 items-center"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
