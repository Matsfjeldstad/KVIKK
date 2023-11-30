import { NextAuthOptions, DefaultSession } from "next-auth";

// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import { sendVerificationRequest } from "@/utils/sendVerificationRequest";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user?: {
            id: string;
        } & DefaultSession["user"];
    }
}

export const authConfig: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        {
            id: "email",
            type: "email",
            name: "Email",
            options: {},
            server: "",
            from: "onboarding@kvikkmail.com",
            maxAge: 60 * 60 * 24 * 7,
            sendVerificationRequest,
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
    pages: {
        verifyRequest: "/verify-request",
        newUser: "/new-user",
        signIn: "/signin",
    },
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
}) => {
    return getServerSession(ctx.req, ctx.res, authConfig);
};
