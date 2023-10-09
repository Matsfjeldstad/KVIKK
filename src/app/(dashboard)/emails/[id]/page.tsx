import { wait } from "@/app/api/emails/route";
import { Skeleton } from "@/components/ui/skeleton";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import EditButton from "./edit-button";

type Props = {};

export default async function page({ params }: { params: { id: string } }) {
    const { id } = params;
    const res = await fetch("http://localhost:3000/api/emails?id=" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        next: {
            revalidate: 1,
        },
    });
    const posts = await res.json();
    await wait(2000);
    return (
        <div className="p-10">
            <div className="flex justify-between">
                <div className="flex flex-col gap-4 text-gray-300">
                    <h1 className="text-xl font-medium">
                        Subject:{" "}
                        <span className="font-bold text-gray-100">
                            {posts.subject}
                        </span>
                    </h1>
                    <div className="flex gap-4">
                        <div>
                            from:
                            <span className="font-bold text-gray-100">
                                {posts.from}
                            </span>
                        </div>
                        <div>
                            to:{" "}
                            <span className="font-bold text-gray-100">
                                {posts.to}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            Type:{" "}
                            <span className="font-bold text-gray-100">
                                {posts.type}
                            </span>
                        </div>
                        <div>
                            Mood:{" "}
                            <span className="font-bold text-gray-100">
                                {posts.mood}
                            </span>
                        </div>
                    </div>
                </div>
                <EditButton />
                {/* <div className="px-2 py-1 rounded-md h-fit border border-gray-500">
                        <MoreHorizontal />
                    </div> */}
            </div>
            <div className="p-10 w-full flex justify-center items-center bg-gradient-to-r rounded-3xl border mt-20 border-gray-200/20 from-transparent to-[#262626]">
                <div className=" flex flex-col gap-4 whitespace-pre-line max-w-xl p-10 bg-gray-950 rounded-xl">
                    {posts.email_content}
                </div>
            </div>
        </div>
    );
}
