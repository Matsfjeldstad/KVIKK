"use client";
import React, { Children } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Link, LogOut, Receipt, UserCircle2 } from "lucide-react";

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
                <DropdownMenuItem className="flex gap-2 items-center">
                    <UserCircle2 className="w-4 h-4" />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-2 items-center">
                    <Link className="w-4 h-4" />
                    Homepage
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-2 items-center">
                    <Receipt className="w-4 h-4" /> Billing
                </DropdownMenuItem>
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
