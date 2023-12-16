import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import PriceCard from "./price-card";

type Props = {};

export default function BillingPage({}: Props) {
    return (
        <div className="p-10 relative">
            <div className="w-full h-full absolute top-0 left-0 opacity-5 pointer-events-none bg-[radial-gradient(at_top_left,_#F8F8F8_0%,_transparent_80%)] z-0" />
            <div className="max-w-5xl mx-auto flex flex-col gap-8 relative">
                <h1 className="font-bold text-3xl">Billing</h1>
                <div className="flex gap-4">
                    <div className="p-6 border flex flex-col gap-6 border-gray-700 w-full rounded-2xl">
                        <div className="flex justify-between items-center">
                            <div className="capitalize text-2xl font-medium">
                                monthly usage
                            </div>
                            <div className="flex gap-2 justify-center text-sm">
                                <ChevronLeft />
                                <div>
                                    <span>Sep 25</span>-<span>Oct 25</span>
                                </div>
                                <ChevronRight />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-400">
                                Emails generated
                            </span>
                            <div>2500/5000</div>
                            <Progress
                                value={50}
                                className=""
                                indicatorClassName="bg-gradient-to-r from-green-400 to-green-800"
                            />
                            <div className="text-gray-400 text-sm">
                                2500 generations left
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border flex flex-col gap-6 border-gray-700 w-full rounded-2xl">
                        <div className="flex items-center">
                            <div className="capitalize text-2xl font-medium">
                                Daily Limit
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-400">
                                Emails generated
                            </span>
                            <div>1/100</div>
                            <Progress
                                value={1}
                                className=""
                                indicatorClassName="bg-gradient-to-r from-green-400 to-green-800"
                            />
                            <div className="text-gray-400 text-sm">
                                99 generations left
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-6">
                    <PriceCard type="free" />
                    <PriceCard type="premium" />
                    <PriceCard type="enterprise" />
                </div>
            </div>
        </div>
    );
}
