import { api } from "@/app/_trpc/server";
import { Separator } from "@/components/ui/separator";
import React from "react";
import AccountForm from "../components/AccountForm";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

async function serverUserData() {
    const userData = await getServerSession(authConfig);

    if (!userData) {
        return null;
    }

    return userData.user;
}

export default async function AccountPage() {
    const data = await serverUserData();

    if(!data) {
        return redirect("/login")
    }
    return (
        <div className="flex flex-col gap-6 w-full max-w-lg">
            <div>
                <h2 className="font-bold text-xl">Account</h2>
                <p className="text-base text-gray-300">
                    Change your settings related to your account
                </p>
            </div>
            <Separator className="w-full bg-gray-600" />
            <AccountForm data={{id:data?.id!, email: data?.email!, name: data?.name}} />
        </div>
    );
}
