"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
    children: React.ReactNode;
};

export default function Hamburger({ children }: Props) {
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
                className="flex flex-col gap-2 h-[calc(100vh-80px)] fixed top-20 left-0 w-full bg-[#171718] p-6 z-[199]"
            >
                {children}
            </motion.nav>
        </div>
    );
}
