import { AiMail } from "@/assets/Icons";
import React from "react";

type Props = {};

export default function VerifyPage({}: Props) {
    return (
        <main className="h-screen relative w-full ">
            <div className="bg-[radial-gradient(at_50%_45%,_#C738DE50_0%,_transparent_70%)] h-full absolute z-0 w-full pointer-events-none" />
            <div className="max-w-3xl relative z-10 mx-auto flex justify-center items-center h-full flex-col text-center gap-6">
                <AiMail></AiMail>
                <div className="text-3xl font-bold ">
                    Email sent to email@example.com
                </div>
                <div>A sign in link has been sent to your email address.</div>
            </div>
        </main>
    );
}
