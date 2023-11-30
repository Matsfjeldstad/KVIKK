"use client";

import React, { useEffect, useRef } from "react";
import { trpc } from "@/app/_trpc/client";
import { differenceInDays, formatDistanceToNow, format } from "date-fns";
import Link from "next/link";
import EditButton from "./[id]/edit-button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useIntersection } from "@mantine/hooks";
type Props = {};

export function DateTransform({ date }: { date: Date }) {
    const difference = differenceInDays(new Date(), date);
    const distance = formatDistanceToNow(date, {
        addSuffix: true,
    });
    return (
        <div className="text-gray-300 text-sm  mt-5">
            {difference < 3 ? distance : format(date, "PPP")}
        </div>
    );
}

export function LoadingDrafts() {
    return (
        <div className="flex flex-col gap-5 mt-5">
            <div className="flex gap-5 flex-col ">
                <Skeleton className="h-2 w-20" />
                <div className="flex justify-between hover:bg-gray-300/10 duration-150">
                    <div className="border-l p-2">
                        <Skeleton className="h-6 w-36"></Skeleton>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 flex-col ">
                <Skeleton className="h-2 w-20" />
                <div className="flex justify-between hover:bg-gray-300/10 duration-150">
                    <div className="border-l p-2">
                        <Skeleton className="h-6 w-32"></Skeleton>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 flex-col ">
                <Skeleton className="h-2 w-20" />
                <div className="flex justify-between hover:bg-gray-300/10 duration-150">
                    <div className="border-l p-2">
                        <Skeleton className="h-6 w-40"></Skeleton>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 flex-col ">
                <Skeleton className="h-2 w-20" />
                <div className="flex justify-between hover:bg-gray-300/10 duration-150">
                    <div className="border-l p-2">
                        <Skeleton className="h-6 w-32"></Skeleton>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 flex-col ">
                <Skeleton className="h-2 w-20" />
                <div className="flex justify-between hover:bg-gray-300/10 duration-150">
                    <div className="border-l p-2">
                        <Skeleton className="h-6 w-36"></Skeleton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DraftList({}: Props) {
    const [parent] = useAutoAnimate();

    // const { data, isLoading, isError, error, isFetched } =
    //     trpc.getAllEmailDrafts.useQuery();

    const {
        data,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        isError,
        error,
        isFetched,
    } = trpc.getAllEmailDraftsInfinite.useInfiniteQuery(
        {
            limit: 7,
        },
        {
            getNextPageParam: (lastPage) => lastPage.nextCursor,
            initialCursor: 0, // <-- optional you can pass an initialCursor
        }
    );

    const lastEmailRef = useRef<HTMLElement>(null);
    const { ref, entry } = useIntersection({
        root: lastEmailRef.current,
        threshold: 1,
    });

    useEffect(() => {
        if (entry && entry.isIntersecting) {
            fetchNextPage();
        }
    }, [entry, fetchNextPage]);

    if (isLoading) {
        return (
            <div className="mt-5">
                <LoadingDrafts />
            </div>
        );
    }

    if (isFetched && isError) {
        return <div>{error.message}</div>;
    }

    // console.log(filteredData);
    if (data?.pages.length === 0) {
        return <div>No drafts</div>;
    }

    console.log(data);
    const emails = data?.pages.flatMap((page) => {
        console.log(page.emails);
        return page.emails;
    });

    return (
        <div className="flex flex-col gap-5 mt-10">
            <div ref={parent}>
                {emails?.map((email, i) => (
                    <div
                        ref={i === emails.length - 1 ? ref : null}
                        key={email.id}
                        className="flex gap-5 flex-col "
                    >
                        <DateTransform date={email.created_at} />
                        <div className="flex justify-between hover:bg-gray-300/10 duration-150">
                            <Link
                                href={`/emails/${email.id}`}
                                className="border-l py-1 px-2 text-lg font-bold"
                            >
                                subject: {email.subject}
                            </Link>
                            <EditButton id={email.id} />
                        </div>
                        {/* <Separator className="bg-gray-600" /> */}
                    </div>
                ))}
                {isFetchingNextPage && <LoadingDrafts />}
            </div>
        </div>
    );
}

// data?.pages.map((page, i) => (
// <div key={i} ref={parent}>
//     {page.emails.map((email, i) => (

//         <div
//             key={email.id}
//             className="flex gap-5 flex-col "
//         >
//             <DateTransform date={email.created_at} />
//             <div className="flex justify-between hover:bg-gray-300/10 duration-150">
//                 <Link
//                     href={`/emails/${email.id}`}
//                     className="border-l py-1 px-2 text-lg font-bold"
//                 >
//                     subject: {email.subject}
//                 </Link>
//                 {/* <div className="mx-auto">status: {email.status}</div> */}
//                 <div>
//                     <EditButton id={email.id} />
//                 </div>
//             </div>
//             {/* <Separator className="bg-gray-600" /> */}
//         </div>
//     ))}
// </div>
