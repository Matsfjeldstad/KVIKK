"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SettingsNav() {
    const navLinks = [
        {
            name: "Account",
            href: "/settings/account",
        },
        {
            name: "Billing",
            href: "/settings/billing",
        },
        {
            name: "Emails",
            href: "/settings/emails",
        },
    ];

    const pathname = usePathname();
    return (
        <>
            {navLinks.map((link) => (
                <Link
                    href={link.href}
                    key={link.href}
                    className={cn(
                        pathname === link.href ? "bg-stone-800" : "",
                        "px-4 py-2 w-full hover:bg-stone-800 rounded duration-200"
                    )}
                >
                    {link.name}
                </Link>
            ))}
        </>
    );
}
