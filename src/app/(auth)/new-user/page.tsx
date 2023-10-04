import { AiMail } from "@/assets/Icons";
import React from "react";

type Props = {};

export default function VerifyPage({}: Props) {
    return (
        <main className="h-screen  bg-[radial-gradient(circle_at_top_right,_#C738DE90_0%,_transparent_70%)]">
            <div className="max-w-3xl mx-auto flex justify-center items-center h-full flex-col text-center gap-6">
                <AiMail></AiMail>
                <div className="text-3xl font-bold ">
                    Welcome new user
                </div>
                <div>dashboard here</div>
            </div>
        </main>
    );
}
