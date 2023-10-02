import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Email Ai - Email Automation for Everyone",
    description:
        "Email Ai is a tool that helps you generate emails for your personal emails. Powered by GPT-3.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "bg-[#010821] text-gray-200")}>
                {children}
            </body>
        </html>
    );
}
