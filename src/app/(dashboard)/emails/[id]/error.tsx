"use client";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowLeft, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EmailError() {
    const router = useRouter();
    return (
        <div className="p-10 flex flex-col gap-5 justify-center items-center">
            <h2 className="text-3xl font-bold">
                Looks like something went wrong...
            </h2>
            <div className="flex gap-4 items-center">
                <Button
                    className="w-fit p-2 gap-2 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                    onClick={() => router.push("/emails")}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Go Back
                </Button>
                or
                <Button
                    className="w-fit p-2 bg-gray-200 gap-2 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                    onClick={() => router.refresh()}
                >
                    <RefreshCcw className="h-4 w-4" />
                    Refresh
                </Button>
            </div>
        </div>
    );
}
