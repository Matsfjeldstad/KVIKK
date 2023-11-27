import DashboardNav from "@/components/dashboard/DashboardNav";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: React.ReactNode;
};

export const metadata: Metadata = {
    title: "Email Ai - Email Automation for Everyone",
    description:
        "Email Ai is a tool that helps you generate emails for your personal emails. Powered by GPT-3.",
};

export default function DashboardLayout({ children }: Props) {
    return (
        <div
            className={cn(
                inter.className,
                "bg-[#171718] text-gray-200 min-h-screen flex flex-col md:flex-row"
            )}
        >
            <DashboardNav />
            <main className="w-full">
                <div className="p-5 hidden border-b max-h-16 md:flex gap-4 justify-end sticky z-50 bg-[#171718] border-stone-800">
                    <Link href={"/dashboard"} className="underline">
                        {" "}
                        Feed back
                    </Link>
                    <Link href={"/dashboard"} className="underline">
                        {" "}
                        Help
                    </Link>
                </div>
                <div className="  h-[calc(100vh-80px)] md:h-[calc(100vh-64px)] overflow-y-scroll overflow-x-hidden">
                    <Toaster richColors />
                    {children}
                </div>
            </main>
        </div>
    );
}
