import { NextAuthOptions, getServerSession } from "next-auth";

// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import { sendVerificationRequest } from "@/utils/sendVerificationRequest";


export const authConfig: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        {
            id: "email",
            type: "email",
            name: "Email",
            options: {},
            server:"",
            from:"",
            maxAge: 60 * 60 * 24 * 7,
           sendVerificationRequest({identifier: email, url}){
            sendVerificationRequest({identifier: email, url})
           }
        },
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
    ],
    // secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            return session;
        },
    },
};
