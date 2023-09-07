"use client";
import Image from "next/image";
import React from "react";
import heroGif from "@/assets/animations/wavyHero.webp";
import { AiMail } from "@/assets/Icons";
import { motion } from "framer-motion";

type Props = {};

export default function HeroBanner({}: Props) {
    return (
        <section className="h-screen relative">
            <div className="absolute h-full w-full bg-gradient-to-b from-[#010A2B] to-gray-950/90 top-0 left-0 z-10" />
            <motion.div
                initial={{
                    opacity: 0.2,
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 1,
                    },
                }}
            >
                <Image
                    src={heroGif}
                    alt="wavy background"
                    className="w-screen h-full absolute inset-0 z-0 object-fill  pointer-events-none "
                />
            </motion.div>
            <div className="h-full max-w-3xl mx-auto relative z-10 text-center w-full flex gap-6 justify-center items-center flex-col p-6 text-white">
                <motion.div
                    initial={{
                        scale: 2,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                >
                    <AiMail className="w-12 h-12 fill-white" />
                </motion.div>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="text-6xl font-black"
                >
                    <span className="text-transparent [text-wrap:balance] bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500">
                        Never Spend Time
                    </span>
                    <br />
                    <span className="text-transparent [text-wrap:balance] bg-clip-text bg-gradient-to-b from-[#C738DE] to-[#A30A6F]">
                        Writing Emails Again
                    </span>
                </motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.2,
                        },
                    }}
                    className="text-2xl [text-wrap:balance] text-gray-400 leading-normal"
                >
                    The AI-powered email response generator
                    that makes your life easier.
                </motion.p>
                <motion.button
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.3,
                        },
                    }}
                    className="px-4 py-2 rounded-lg font-medium bg-white text-gray-800"
                >
                    Go to app
                </motion.button>
            </div>
        </section>
    );
}
