import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authConfig } from "@/lib/auth";
import Home from "./(public_facing)/home/page";
import Footer from "@/components/Footer";

type Props = {};

export default async function page({}: Props) {
    const session = await getServerSession(authConfig);
    // console.log(session?.user);
    if (session?.user) {
        redirect("/dashboard");
    }
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    );
}
