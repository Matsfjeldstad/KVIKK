// import prisma from "@/lib/db";
// const prisma = new PrismaClient();

// export async function prismaExample() {
//     const users = await prisma.email.findMany();
//     if (users.length < 1) {
//         return null;
//     }
//     return users;
// }

import { NextResponse } from "next/server";

export async function wait(ms : number){
    await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
        return new Response("Hello, Next.js!", {
            status: 404,
        });
    }

    const data = {
        id: id,
        subject: "Emailll to landlord",
        from: "example@example.com",
        to: "Test@example.com",
        type: "sonal",
        status: "draft",
        context: "context",
        mood: "Angry 😡",
        length: "Medium",
        email_content: `Dear [Landlord],

        I am writing to express my frustration about the extremely poor internet connection in my building. As a digitally connected tenant, I depend on the connection to do both work and leisure activities, and I am unable to do either of them due to ongoing problems with the internet.
        
        I am writing to express my frustration about the extremely poor internet connection in my building. As a digitally connected tenant, I depend on the connection to do both work and leisure activities, and I am unable to do either of them due to ongoing problems with the internet.
        
         Please send a technician to my building to repair the issues.`,
    };
    // const data = await prisma.user.findMany({
    //     where: {
    //         id: "1",
    //     }
    // });
   

    return NextResponse.json(data);
}
