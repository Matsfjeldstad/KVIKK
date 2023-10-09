import { Skeleton } from "@/components/ui/skeleton";
import { MoreHorizontal } from "lucide-react";
import React from "react";

type Props = {};

export default function loading({}: Props) {
    return (
        <div className="p-10">
            <div className="flex justify-between">
                <div className="flex flex-col gap-4 text-gray-300">
                    <h1 className="text-xl flex gap-3 font-medium">
                        Subject: <Skeleton className="w-80 h-7 opacity-50" />
                    </h1>
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            from:
                            <Skeleton className="w-20 h-5  opacity-50" />
                        </div>
                        <div className="flex gap-2">
                            to: <Skeleton className="w-20 h-5  opacity-50" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            Type: <Skeleton className="w-20 h-5  opacity-50" />
                        </div>
                        <div className="flex gap-2">
                            Mood: <Skeleton className="w-20 h-5  opacity-50" />
                        </div>
                    </div>
                </div>
                <div className="px-2 py-1 rounded-md h-fit border border-gray-500">
                    <MoreHorizontal />
                </div>
            </div>
            <div className="p-10 w-full flex justify-center items-center bg-gradient-to-r rounded-3xl border mt-20 border-gray-200/20 from-transparent to-[#262626]">
                <div className=" flex flex-col gap-4 whitespace-pre-line max-w-xl p-10 w-full bg-gray-950 rounded-xl">
                    <Skeleton className="w-[100px] h-5  opacity-50" />
                    <Skeleton className="w-full h-20  opacity-50" />
                    <Skeleton className="w-full h-20  opacity-50" />
                    <Skeleton className="w-full h-20  opacity-50" />
                    <Skeleton className="w-[100px] h-5  opacity-50" />
                </div>
            </div>
        </div>
    );
}
