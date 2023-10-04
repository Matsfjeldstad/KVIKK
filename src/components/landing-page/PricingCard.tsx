import React from "react";

type Props = {};

export function PricingCardFree({}: Props) {
    return (
        <div className=" flex flex-col justify-between gap-10 border-gray-700 bg-gray-900 text-gray-300 p-10 w-full max-w-sm rounded-3xl">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h3 className="font-medium text-gray-200 text-xl">
                        Free Plan
                    </h3>
                    {/* <p className=" text-gray-400">trial</p> */}
                </div>
                <div className="text-5xl font-bold">$0</div>
            </div>
            <div>
                <ul className="flex flex-col gap-5 list-disc">
                    <li>5 Genrations a month</li>
                    <li>3 Saved Emails</li>
                    <li>Basic AI model</li>
                </ul>
            </div>
            <button className="w-full rounded-full  bg-gray-100 text-gray-800 p-4">
                Get Started
            </button>
        </div>
    );
}

export function PricingCardPremium({}: Props) {
    return (
        <div className="border-2 relative flex flex-col justify-between gap-10 border-[#C738DE] bg-gray-900 text-gray-200 p-10 w-full max-w-sm rounded-3xl overflow-hidden">
            <div className="w-full h-full absolute top-0 left-0 opacity-40 pointer-events-none bg-[radial-gradient(at_top_right,_#C738DE_0%,_transparent_80%)] z-0" />
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h3 className="font-medium text-gray-200 text-xl">
                        Premium Plan
                    </h3>
                    {/* <p className=" text-gray-300">trial</p> */}
                </div>
                <div className="text-5xl font-bold">$10<span className="text-base">/month</span></div>
            </div>
            <div>
                <ul className="flex flex-col gap-5 list-disc">
                    <li>Unlimited Genrations a month</li>
                    <li>Unlimited Saved Genrations</li>
                    <li>Most powerfull AI Model</li>
                </ul>
            </div>
            <button className="w-full rounded-full font-bold  bg-gray-100 text-gray-800 p-4">
                Get Started
            </button>
        </div>
    );
}
