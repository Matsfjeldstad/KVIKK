import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { KvikkLogo } from "@/assets/Logo";

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
            <body className={cn(inter.className, "bg-[#010821]")}>
                <header className="flex justify-center bg-white/[0.0001] backdrop-blur-xl items-center fixed top-0 z-20 w-screen left-0 h-20 text-white">
                    <KvikkLogo className="h-4 w-4 fill-white" />
                </header>
                {children}
                <footer className="w-full min-h-[80vh] pt-20 border-t border-gray-600/50 ">
                    <div className="max-w-6xl mx-auto p-10 ">
                        <KvikkLogo className="fill-white" />
                    </div>
                    <div className="border-t border-gray-600/50 h-20 p-6 text-center text-gray-600">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Mats Fjeldstad
                        </p>
                        <p className="text-sm">
                            Site developed and designed by Mats
                            Fjeldstad/matsfjeldstad.no
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
