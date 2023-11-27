"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { links } from "./DashboardNav";
import { SignOutLink } from "../authButtons";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className=" h-fit w-fit md:hidden py-2"
        >
            <motion.div
                className="w-7 h-1 bg-gray-200 rounded-full -translate-y-1"
                initial={{ rotate: 0, y: -4 }}
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? "100%" : -4 }}
            />
            <motion.div
                className="w-7 h-1 bg-gray-200 rounded-full"
                animate={{ rotate: isOpen ? -45 : 0 }}
            />
            <motion.div
                className="w-7 h-1 bg-gray-200 rounded-full translate-y-1"
                initial={{ rotate: 0, y: 4 }}
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? "-100%" : 4 }}
            />
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className={cn("flex flex-col gap-2 h-[calc(100vh-80px)] fixed top-20 left-0 w-full bg-[#171718] p-6 z-[199]", isOpen ? "flex" : "hidden")}
            >
                {links.map((link, index) => (
                    <div key={index}>
                        <Link
                            href={link.href}
                            key={link.name}
                            className="p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-stone-900"
                        >
                            <link.icon className="w-4 h-4" />
                            {link.name}
                        </Link>

                        <Separator key={index} className="bg-stone-700" />
                    </div>
                ))}
                <SignOutLink className="p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-stone-900" />
            </motion.nav>
        </div>
    );
}
