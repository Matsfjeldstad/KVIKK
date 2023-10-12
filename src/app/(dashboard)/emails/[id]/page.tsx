"use client";
import React from "react";
import EditButton from "./edit-button";
import { trpc } from "@/app/_trpc/client";
import Loading from "./loading";

type Props = {};

export default async function page({ params }: { params: { id: string } }) {
    // const email = await res.json();
    const { data: email, isLoading } = await trpc.getEmail.useQuery();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="p-10">
            <div className="flex justify-between">
                <div className="flex flex-col gap-4 text-gray-300">
                    <h1 className="text-xl font-medium">
                        Subject:{" "}
                        <span className="font-bold text-gray-100">
                            {email?.subject}
                        </span>
                    </h1>
                    <div className="flex gap-4">
                        <div>
                            from:
                            <span className="font-bold text-gray-100">
                                {email?.from}
                            </span>
                        </div>
                        <div>
                            to:{" "}
                            <span className="font-bold text-gray-100">
                                {email?.to}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            Type:{" "}
                            <span className="font-bold text-gray-100">
                                {email?.type}
                            </span>
                        </div>
                        <div>
                            Mood:{" "}
                            <span className="font-bold text-gray-100">
                                {email?.mood}
                            </span>
                        </div>
                    </div>
                </div>
                <EditButton />
            </div>
            <div className="p-10 w-full flex justify-center items-center bg-gradient-to-r rounded-3xl border mt-20 border-gray-200/20 from-transparent to-[#262626]">
                <div className=" flex flex-col gap-4 whitespace-pre-line max-w-xl p-10 bg-gray-950 rounded-xl">
                    {email?.email_text}
                </div>
            </div>
        </div>
    );
}
