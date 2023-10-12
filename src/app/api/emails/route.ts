import { authConfig } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

// const prisma = new PrismaClient();

// export async function prismaExample() {
//     const users = await prisma.email.findMany();
//     if (users.length < 1) {
//         return null;
//     }
//     return users;
// }

import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const session = await getServerSession(authConfig);
    const user = session?.user;

    if (!user) {
        return NextResponse.json(
            JSON.stringify({ message: "Not authorized" }),
            {
                status: 401,
            }
        );
    }

    if (!id) {
        return NextResponse.json(
            { error_message: "No id provied", status: 400 },
            {
                status: 400,
            }
        );
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: user.email!,
        },
    });

    const data = await prisma.emails.findUnique({
        where: {
            id: Number(id),
            author_id: currentUser?.id,
        },
    });

    if (!data) {
        return NextResponse.json(
            JSON.stringify({ message: "email not found" }),
            {
                status: 404,
            }
        );
    }

    return NextResponse.json({data: data, user: user});
}
