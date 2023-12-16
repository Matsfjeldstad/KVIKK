import React from "react";
import GeneratorPage from "../generator/page";
import { NewUserModal } from "./new-user";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

type Props = {
    searchParams: { [new_user: string]: string | string[] | undefined };
};

async function serverUserData() {
    const userData = await getServerSession(authConfig);

    if (!userData) {
        return null;
    }

    return userData.user;
}

export default async function page({ searchParams }: Props) {
    const data = await serverUserData();
    const isNewUser = searchParams.new_user === "true";
    return (
        <div>
            <GeneratorPage />
            <NewUserModal isNewUser={isNewUser} data={{id:data?.id!, email: data?.email!, name: data?.name!}} />
        </div>
    );
}
