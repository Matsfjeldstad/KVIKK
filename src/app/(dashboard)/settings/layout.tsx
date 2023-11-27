import React from "react";
import SettingsNav from "./components/settingsNav";

type Props = {
    children: React.ReactNode;
};

export default function layout({ children }: Props) {
    return (
        <div>
            <div className="p-6 border-b border-stone-800">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-gray-300">Settings</p>
            </div>
            <div className="flex flex-row">
                <nav className="min-w-[240px] border-r p-6 flex flex-col gap-2 border-stone-800 font-bold">
                    <SettingsNav />
                </nav>
                <div className="min-h-[calc(100vh-64px)] p-6 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
