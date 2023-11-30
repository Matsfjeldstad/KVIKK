import React from "react";
import {
    DraftCard,
    ResponeCard,
    ToneCard,
} from "@/components/landing-page/InfoCard";
import {
    PricingCardFree,
    PricingCardPremium,
} from "@/components/landing-page/PricingCard";
import { Lightning, Mail } from "@/assets/Icons";
import HeroBanner from "@/components/landing-page/HeroBanner";
import { MailIcon } from "lucide-react";

type Props = {};

export default function Home({}: Props) {
    return (
        <main>
            <HeroBanner />
            <div className="h-full min-h-screen bg-[#010821] text-white">
                <div className="w-full h-40 bg-gradient-to-b relative -top-40 from-transparent to-[#010821]" />
                <div className="p-6 max-w-7xl mx-auto">
                    <div className="h-full max-w-2xl mx-auto relative z-10 text-center w-full flex gap-6 justify-center items-center flex-col p-6 text-white">
                        <div>
                            <Lightning className="w-8 h-8 stroke-gray-300" />
                        </div>
                        <h2 className="text-5xl font-black capitalize leading-snug ">
                            <span className="text-transparent [text-wrap:balance] bg-clip-text bg-gradient-to-b from-[#C738DE] to-[#A30A6F]">
                                Unlock the power
                            </span>
                            <span className="text-transparent [text-wrap:balance] bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500">
                                {" "}
                                of Blazingly fast emails
                            </span>
                            <br />
                        </h2>
                        <p className="text-lg [text-wrap:balance] text-gray-400 leading-normal">
                            Write email quiker then you can think. Just add some
                            context and press Generate.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-20 md:gap-4 mt-20">
                        <ToneCard />
                        <ResponeCard />
                    </div>
                </div>
            </div>
            <div className="h-full min-h-screen bg-[#010821] text-white">
                <div className="w-full h-40 bg-gradient-to-b relative -top-40 from-transparent to-[#010821]" />
                <div className="p-6 max-w-7xl mx-auto">
                    <div className="h-full max-w-3xl mx-auto relative z-10 text-center w-full flex gap-6 justify-center items-center flex-col p-6 text-white">
                        <div>
                            <MailIcon className="w-8 h-8 stroke-gray-300" />
                        </div>
                        <h2 className="text-5xl font-black capitalize leading-snug ">
                            <span className="text-transparent [text-wrap:balance] bg-clip-text bg-gradient-to-b from-[#C738DE] to-[#A30A6F]">
                                Send Your Emails
                            </span>
                            <br />
                            <span className="text-transparent [text-wrap:balance] bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500">
                                {" "}
                                Dirctly from the dashboard
                            </span>
                        </h2>
                        <p className="text-lg max-w-2xl [text-wrap:balance] text-gray-400 leading-normal">
                            When ready you can send your genrated emails from our app.
                        </p>
                    </div>
                    <div className="flex flex-col max-w-3xl h-[500px] mx-auto md:flex-row justify-between gap-20 md:gap-4 mt-20">
                        <DraftCard />
                    </div>
                </div>
            </div>
            <div className="h-full relative min-h-screen bg-[#010821] text-white">
                <div className="w-full h-40 bg-gradient-to-b relative -top-40 from-transparent to-[#010821]" />
                <div className="w-full h-full absolute top-0 left-0 opacity-20 pointer-events-none bg-[radial-gradient(at_50%_70%,_#C738DE_0%,_transparent_60%)] z-0" />
                <div className="p-6 max-w-7xl mx-auto">
                    <div className="h-full max-w-2xl mx-auto relative z-10 text-center w-full flex gap-6 justify-center items-center flex-col p-6 text-white">
                        <div className="text-2xl">$</div>
                        <h2 className="text-5xl font-black capitalize leading-snug ">
                            <span className="text-transparent [text-wrap:balance] bg-clip-text bg-gradient-to-b from-[#C738DE] to-[#A30A6F]">
                                Worry about your mails,
                            </span>
                            <span className="text-transparent [text-wrap:balance] bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500">
                                {" "}
                                Not your bills
                            </span>
                            <br />
                        </h2>
                        <p className="text-lg [text-wrap:balance] text-gray-400 leading-normal">
                            With our premium plan you can genrate as many mails
                            as you want.
                        </p>
                    </div>
                    <div className="flex relative pb-20 z-10 flex-col max-w-3xl h-full md:h-[500px] mx-auto md:flex-row justify-between gap-6 md:gap-4 mt-20 items-center md:items-stretch">
                        <PricingCardFree />
                        <PricingCardPremium />
                    </div>
                </div>
            </div>
        </main>
    );
}
