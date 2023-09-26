"use client";
import React, { Children } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";

type Props = {
    children: React.ReactNode;
};

export default function DropDown({ children }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="bg-gray-200 py-1 px-3 rounded-md relative flex items-center gap-2 text-gray-900 hover:bg-gray-300 hover:text-gray-800">
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
