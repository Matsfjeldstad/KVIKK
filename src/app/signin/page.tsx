import { KvikkLogo } from "@/assets/Logo";
import EmailAuthForm from "@/components/EmailAuthForm";
import {
    EmailSignInButton,
    GithubSignInButton,
    GoogleSignInButton,
} from "@/components/authButtons";
import { Button } from "@/components/ui/button";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";

import { redirect } from "next/navigation";

import React from "react";

type Props = {};

export default async function SignInPage({}: Props) {
    const session = await getServerSession(authConfig);
    if (session) {
        redirect("/");
    }

    return (
        <div className="min-h-screen w-full flex mt-20">
            <div className="w-2/5 bg-gradient-to-bl from-slate-950 to-purple-950/20 flex justify-center items-center">
                <KvikkLogo className="h-full w-[200px] fill-purple-500" />
            </div>
            <div className="w-3/5 flex items-center ">
                <div className="min-w-[200px] flex flex-col gap-4 w-full  bg-white max-w-xl text-gray-800 p-10 rounded-xl mx-auto">
                    <h2 className="text-2xl font-bold">Create an account</h2>
                    <p>lets start your 30 day trail</p>
                    <div className="flex flex-col gap-4">
                        <GoogleSignInButton />
                        <GithubSignInButton />
                    </div>
                    <div>or</div>
                    <div className="flex flex-col gap-4">
                        <EmailAuthForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
