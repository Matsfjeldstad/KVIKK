import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function PublicFacingLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
