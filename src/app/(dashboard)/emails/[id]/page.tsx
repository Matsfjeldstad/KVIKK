"use client";
import React from "react";
import EditButton from "./edit-button";
import { trpc } from "@/app/_trpc/client";
import Loading from "./loading";
import EmailError from "./error";
import { formatEmailText } from "@/lib/utils";

type Props = {};


export default function page({ params }: { params: { id: string } }) {
    const { id } = params;
    // const email = await res.json();
    const {
        data: email,
        isLoading,
        isError,
        error,
    } = trpc.getEmail.useQuery({
        id: Number(id),
    });

    if (isLoading) {
        return <Loading />;
    }

    if (isError || !email) {
        return <EmailError />;
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
                <EditButton
                    id={email?.id!}
                    text={email?.email_text}
                    to={email?.to}
                    subject={email?.subject}
                    from={email?.from}
                />
            </div>
            <div className="p-10 w-full flex justify-center items-center bg-gradient-to-r rounded-3xl border mt-20 border-gray-200/20 from-transparent to-[#262626]">
                <div className=" flex flex-col gap-4 whitespace-pre-line  max-w-xl p-10 bg-gray-950 rounded-xl">
                    {formatEmailText(email?.email_text)}
                </div>
            </div>
        </div>
    );
}
