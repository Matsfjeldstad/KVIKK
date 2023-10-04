import { AiMail, Lightning } from "@/assets/Icons";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/landing-page/HeroBanner";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {
    DraftCard,
    ResponeCard,
    ToneCard,
} from "@/components/landing-page/InfoCard";
import {
    PricingCardFree,
    PricingCardPremium,
} from "@/components/landing-page/PricingCard";
import React from "react";
import { authConfig } from "@/lib/auth";
import Home from "./(public_facing)/home/page";

type Props = {};

export default async function page({}: Props) {
    const session = await getServerSession(authConfig);
    console.log(session?.user);
    if (session?.user) {
        redirect("/dashboard");
    }
    return (
        <>
            <Navbar />
            <Home />
        </>
    );
}
