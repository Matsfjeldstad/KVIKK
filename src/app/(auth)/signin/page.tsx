import { KvikkLogo } from "@/assets/Logo";
import EmailAuthForm from "@/components/EmailAuthForm";
import {
    GithubSignInButton,
    GoogleSignInButton,
} from "@/components/authButtons";
import { authConfig } from "@/lib/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";



export const metadata: Metadata = {
    title: "Sign in to Kvikk",
    description:
        "Sign in to your Kvikk account, and explore kvikks ai tools. Powered by GPT-4.",
};

type Props = {};

export default async function SignInPage({}: Props) {
    const session = await getServerSession(authConfig);
    if (session) {
        redirect("/");
    }

    return (
        <div className="min-h-screen w-full flex bg-slate-100 ">
            <div className="hidden md:w-2/5 bg-gradient-to-bl from-slate-400 to-purple-400/20 md:flex justify-center items-center">
                <KvikkLogo className="h-full w-[200px] fill-gray-900" />
            </div>
            <div className="md:w-3/5 w-full  flex items-center ">
                <div className="min-w-[200px] flex flex-col gap-6 w-full  max-w-xl text-gray-800 p-10 rounded-xl mx-auto">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">Welcome Back!</h2>
                        <p>Sign in to your Kvikk account</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <GoogleSignInButton type="signin" />
                        <GithubSignInButton type="signin" />
                    </div>

                    <div className="text-center flex gap-2 items-center">
                        <div className="w-full h-0.5 bg-slate-300" />
                        or
                        <div className="w-full h-0.5 bg-slate-300" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <EmailAuthForm type="signin" />
                    </div>
                    <div className="flex gap-2">
                        Dont have an account yet?
                        <Link href="/auth/registrer" className="underline">
                            {" "}
                            Sign up here!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
