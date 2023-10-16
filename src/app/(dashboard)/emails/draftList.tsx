"use client";

import React from "react";
import { trpc } from "@/app/_trpc/client";
import { differenceInDays, formatDistanceToNow, format } from "date-fns";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { MoreHorizontal } from "lucide-react";
import EditButton from "./[id]/edit-button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
type Props = {};

export function DateTransform({ date }: { date: Date }) {
    const difference = differenceInDays(new Date(), date);
    const distance = formatDistanceToNow(date, {
        addSuffix: true,
    });
    return (
        <div className="text-gray-300 text-sm">
            {difference < 3 ? distance : format(date, "PPP")}
        </div>
    );
}

export default function DraftList({}: Props) {
    const [parent] = useAutoAnimate();
    const { data, isLoading, isError, error, isFetched } =
        trpc.getAllEmailDrafts.useQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isFetched && isError) {
        return <div>{error.message}</div>;
    }

    // console.log(filteredData);
    if (data?.length === 0) {
        return <div>No drafts</div>;
    }

    return (
        <div ref={parent} className="flex flex-col gap-5 mt-10">
            {data?.map((email) => (
                <div key={email.id} className="flex gap-5 flex-col ">
                    <DateTransform date={email.created_at} />
                    <div className="flex justify-between">
                        <Link
                            href={`/emails/${email.id}`}
                            className="underline text-lg font-bold"
                        >
                            {email.subject}
                        </Link>
                        {/* <div className="mx-auto">status: {email.status}</div> */}
                        <div>
                            <EditButton id={email.id} />
                        </div>
                    </div>
                    <Separator className="bg-gray-600" />
                </div>
            ))}
        </div>
    );
}
