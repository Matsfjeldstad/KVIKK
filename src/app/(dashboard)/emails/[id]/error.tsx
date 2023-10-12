"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();
    return (
        <div className="p-10 flex flex-col gap-5">
            <h2 className="text-3xl font-bold">
                Looks like something went wrong...
            </h2>
            <Button
                className="w-fit p-2 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                onClick={() => router.push("/emails")}
            >
                Go Back
            </Button>
        </div>
    );
}
