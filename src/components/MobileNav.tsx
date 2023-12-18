"use client";
import React from "react";
import { useMenuStore } from "@/store/store";
import { links } from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import Link from "next/link";
import { Button } from "./ui/button";

export function Hamburger() {
    const isOpen = useMenuStore((state) => state.isOpen);

    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => useMenuStore.setState({ isOpen: !isOpen })}
            className="flex flex-col gap-1 relative z-[100] cursor-pointer"
        >
            <motion.div
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="w-8 h-1 bg-white rounded-full"
            />
            <motion.div
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-8 h-1 bg-white rounded-full"
            />
            <motion.div
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="w-8 h-1 bg-white rounded-full"
            />
        </motion.div>
    );
}

export default function MobileNav() {
    const isOpen = useMenuStore((state) => state.isOpen);
    return (
        <div>
            <Hamburger />
            <AnimatePresence>
                {isOpen && (
                    <RemoveScroll enabled={isOpen}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed top-0 left-0 w-full h-screen z-50 bg-gray-900"
                        >
                            <div className="w-full h-full absolute top-0 left-0 opacity-20 pointer-events-none bg-[radial-gradient(at_top_left,_#C738DE_0%,_transparent_80%)] z-0" />
                            <div className="w-full h-full flex flex-col justify-center items-center gap-10">
                                {links.map((link) => (
                                    <Link
                                        href={link.href}
                                        key={link.name}
                                        className="text-3xl  font-bold text-white"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link href={"/signin"}>
                                    <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300 hover:text-gray-800">
                                        Sign in
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </RemoveScroll>
                )}
            </AnimatePresence>
        </div>
    );
}
