import { KvikkLogo } from "@/assets/Logo";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
    return (
        <footer className="w-full pt-20 border-t border-gray-600/50 ">
            <div className="max-w-7xl mx-auto p-10 flex flex-col gap-4">
                <KvikkLogo className="fill-white " />
                <div className="border-t border-gray-600/50 h-20 p-6 text-center text-gray-600">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Mats Fjeldstad
                    </p>
                    <p className="text-sm">
                        Site developed and designed by Mats
                        Fjeldstad/matsfjeldstad.no
                    </p>
                </div>
            </div>
        </footer>
    );
}
