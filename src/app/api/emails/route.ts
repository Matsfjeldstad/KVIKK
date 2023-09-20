import prisma from "@/lib/db";
// const prisma = new PrismaClient();

// export async function prismaExample() {
//     const users = await prisma.email.findMany();
//     if (users.length < 1) {
//         return null;
//     }
//     return users;
// }

import { NextResponse } from "next/server";

export async function GET() {
    const data = await prisma.email.findMany({
        where: { author_id: 1 },
    });
    return NextResponse.json(data);
}
