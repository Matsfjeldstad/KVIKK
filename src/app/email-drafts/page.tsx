import prisma from "@/lib/db";
import React from "react";

type Props = {};


export async function prismaExample() {
    const users = await prisma.email.findMany();
    if (users.length < 1) {
        return null;
    }
    return users;
}

export default async function page({}: Props) {
    const users = await prismaExample();
    return (
        <div>
            <div className="min-h-screen text-white pt-40 mx-auto max-w-6xl">
                {users?.map((user) => {
                    return <div key={user.id}>{user.email_text}</div>;
                })}
            </div>
        </div>
    );
}
