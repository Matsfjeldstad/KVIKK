"use client";
import { Sparkles } from "@/assets/Icons";
import React from "react";
import { Switch } from "../ui/switch";
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
};

const string = `Dear [Landlord],

I am writing to express my frustration about the extremely poor internet connection in my building. As a digitally connected tenant, I depend on the connection to do both work and leisure activities, and I am unable to do either of them due to ongoing problems with the internet.

 Please send a technician to my building to repair the issues.`;

export default function InfoCard({ children }: Props) {
    return (
        <div className=" w-full p-0.5 h-full rounded-3xl min-h-[400px] bg-gradient-to-b from-gray-700 to-transparent overflow-hidden">
            <div className="relative w-full rounded-3xl h-full min-h-[400px] p-10 bg-[#010821] overflow-hidden">
                <div className="w-full h-1/2 absolute bottom-0 left-0 bg-gradient-to-b pointer-events-none  from-transparent to-[#010821] z-[15]" />
                {children}
            </div>
        </div>
    );
}

export function ToneCard() {
    return (
        <motion.div
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            initial={{
                opacity: 0,
                y: 60,
            }}
            viewport={{ once: true, margin: "-150px" }}
            className="w-full"
        >
            <InfoCard>
                <div className="w-full h-full absolute top-0 left-0 opacity-20 pointer-events-none bg-[radial-gradient(at_50%_30%,_#F8F8F8_0%,_transparent_60%)] z-0" />
                <div className="flex flex-col gap-2 relative z-10">
                    <div className="text-2xl font-bold">Set The Tone</div>
                    <div className="text-lg max-w-xs [text-wrap:balance] text-gray-400">
                        Craft the perfect email with the right tone.
                    </div>
                </div>
                <div className="h-1/2 absolute top-1/2 -right-6 w-[60%] min-w-[300px] flex flex-col gap-2 rounded-lg border bg-gray-100/20 border-gray-500 p-4 z-10">
                    <div className="p-4 border rounded-md text-sm flex gap-2">
                        <div className="text-blue-200 flex gap-2 items-center">
                            <Sparkles className="w-4 h-4 fill-blue-200" />
                            Tone of Email
                        </div>
                        <div>Formal,Angry</div>
                    </div>
                    <div className="p-4 border rounded-md text-sm flex gap-2">
                        <div className="whitespace-pre-line">{string}</div>
                    </div>
                </div>
            </InfoCard>
        </motion.div>
    );
}
export function ResponeCard() {
    return (
        <motion.div
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            initial={{
                opacity: 0,
                y: 60,
            }}
            viewport={{ once: true, margin: "-150px" }}
            className="w-full"
        >
            <InfoCard>
                <div className="w-full h-full absolute top-0 left-0 opacity-20 pointer-events-none bg-[radial-gradient(at_50%_40%,_#F8F8F8_0%,_transparent_60%)] z-0" />
                <div className="flex flex-col gap-2 relative z-10">
                    <div className="text-2xl font-bold">
                        Generate Responses{" "}
                    </div>
                    <div className="text-lg max-w-xs [text-wrap:balance] text-gray-400">
                        Generate a response to your emails quickly and easily
                        with our email response generator.
                    </div>
                </div>
                <div className="h-1/2 absolute bottom-0 -right-6 w-[60%] min-w-[300px] flex flex-col gap-2 rounded-lg border bg-gray-100/20 border-gray-500 p-4 z-10">
                    <div className="flex items-center gap-3 pointer-events-none ">
                        <Switch checked />
                        Is Response
                    </div>
                    <h4 className="text-xl font-medium">Mail to respond to</h4>
                    <div className="p-4 border rounded-md text-sm flex gap-2 h-full">
                        <div className="whitespace-pre-line text-gray-400 h-full min-h-[250px]">
                            Paste your response here....
                        </div>
                    </div>
                </div>
            </InfoCard>
        </motion.div>
    );
}
export function DraftCard() {
    return (
        <motion.div
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            initial={{
                opacity: 0,
                y: 60,
            }}
            viewport={{ once: true, margin: "-150px" }}
            className="w-full"
        >
            <InfoCard>
                <div className="w-full h-full absolute top-0 left-0 opacity-20 pointer-events-none bg-[radial-gradient(at_top_right,_#F8F8F8_0%,_transparent_80%)] z-0" />
                <div className="flex flex-col gap-2 relative z-10">
                    <div className="text-2xl font-bold">
                        Save Draft and Emails
                    </div>
                    <div className="text-lg max-w-xl [text-wrap:balance] text-gray-400">
                        Gain quik access to your saved generated emails. Save
                        draft you want to emails you want to work more on.
                    </div>
                </div>
                <div className="h-1/2 absolute bottom-0 right-10 w-fit min-w-[300px] flex flex-col gap-4 z-10">
                    <div className="text-gray-500">Yesterday</div>
                    <div className="border-l pl-2">
                        Subject: Rental car at Gardemoen Airport
                    </div>
                    <div className="text-gray-500">September 10th 2023</div>
                    <div className="border-l pl-2">
                        Subject: Rental car at Gardemoen Airport
                    </div>
                    <div className="border-l pl-2">
                        Subject: Rental car at Gardemoen Airport
                    </div>
                    <div className="border-l pl-2">
                        Subject: Rental car at Gardemoen Airport
                    </div>
                    <div className="text-gray-500">September 8th 2023</div>
                    <div className="border-l pl-2">
                        Subject: Rental car at Gardemoen Airport
                    </div>
                </div>
            </InfoCard>
        </motion.div>
    );
}
