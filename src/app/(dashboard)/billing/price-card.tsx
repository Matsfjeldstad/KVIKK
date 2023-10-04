import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CheckCircle, CheckCircle2, XCircle } from "lucide-react";
import React from "react";

type Props = {
    type: "free" | "premium" | "enterprise";
};

export default function PriceCard({ type }: Props) {
    if (type === "premium") {
        return (
            <div
                className={cn(
                    " p-0.5 relative rounded-2xl w-full overflow-hidden "
                )}
            >
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-pink-600 via-gray-500 to-gray-600 z-0 p-0.5 " />
                <div className=" bg-[#171718] rounded-2xl  p-5 relative z-10 w-full h-full ">
                    <div className="max-w-[250px] mx-auto flex-col flex h-full items-center gap-8">
                        <div className="text-lg">Premium</div>
                        <div className="text-4xl font-medium">$ 10 / mo</div>
                        <Separator className="bg-gray-600" />
                        <div className="flex flex-col gap-3 items-center my-4">
                            <div>Up to 10,000 Generations / mo</div>
                            <div className="text-sm text-gray-400 ">
                                No Daily Limit
                            </div>
                        </div>
                        <Separator className="bg-gray-600" />
                        <div className="w-full flex flex-col gap-3 capitalize">
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                Email Support
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                Unlimited Drafts
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                send Unlimited email from app
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                Custom email theme
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                add atachments to email
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                Generate email based on pdf
                            </div>
                        </div>
                        <Button className="w-full mt-auto self-end bg-gray-200 disabled:bg-gray-500 text-gray-800 hover:bg-gray-300">
                            {" "}
                            Change Plan
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "enterprise") {
        return (
            <div
                className={cn(
                    " p-[1px] relative rounded-2xl w-full overflow-hidden "
                )}
            >
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-200 via-gray-500 to-gray-600 z-0 p-0.5 " />
                <div className=" bg-[#171718] rounded-2xl p-5 relative z-10 w-full h-full ">
                    <div className="max-w-[250px]  mx-auto  flex-col  flex items-center gap-8 h-full">
                        <div className="text-lg">Enterprise</div>
                        <div className="text-4xl font-medium">Custom</div>
                        <Separator className="bg-gray-600" />
                        <div className="flex flex-col gap-3 items-center text-center my-4">
                            <div>A plan based on your specific needs</div>
                            <div className="text-sm text-gray-400 ">
                                No Daily Limit
                            </div>
                        </div>
                        <Separator className="bg-gray-600" />
                        <div className="w-full flex flex-col gap-3 capitalize">
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                Email Support
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                Unlimited Drafts
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                send Unlimited email from app
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                Custom email theme
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                add atachments to email
                            </div>
                            <div className="flex gap-2 items-center">
                                <CheckCircle2 className="stroke-green-400" />
                                Generate email based on pdf
                            </div>
                        </div>
                        <Button className="w-full mt-auto self-end bg-gray-200 disabled:bg-gray-500 text-gray-800 hover:bg-gray-300">
                            {" "}
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cn("p-6 border rounded-2xl w-full border-gray-600")}>
            <div className="max-w-[250px] mx-auto  flex-col  flex items-center gap-8 h-full">
                <div className="text-lg">Free</div>
                <div className="text-4xl font-medium">$ 0 / mo</div>
                <Separator className="bg-gray-600" />
                <div className="flex flex-col gap-3 items-center my-4">
                    <div>Up to 10 Generations / mo</div>
                    <div className="text-sm text-gray-400 ">
                        10 Generations per day
                    </div>
                </div>
                <Separator className="bg-gray-600" />
                <div className="w-full flex flex-col gap-3 capitalize">
                    <div className="flex gap-2 items-center">
                        <CheckCircle2 className="stroke-green-400" />
                        Email Support
                    </div>
                    <div className="flex gap-2 items-center">
                        <CheckCircle2 className="stroke-green-400" />
                        10 drafts
                    </div>
                    <div className="flex gap-2 items-center">
                        <CheckCircle2 className="stroke-green-400" />
                        send 1 email from app
                    </div>
                    <div className="flex gap-2 items-center text-gray-500">
                        <XCircle className="stroke-gray-500" />
                        Kvikk Theme on Email
                    </div>
                    <div className="flex gap-2 items-center text-gray-500">
                        <XCircle className="stroke-gray-500" />
                        No atachments
                    </div>
                    <div className="flex gap-2 items-center text-gray-500">
                        <XCircle className="stroke-gray-500" />
                        No ai genrations from pdf
                    </div>
                </div>
                <Button className="w-full mt-auto self-end bg-gray-200 disabled:bg-gray-500 text-gray-800 hover:bg-gray-300">
                    {" "}
                    Change Plan
                </Button>
            </div>
        </div>
    );
}
