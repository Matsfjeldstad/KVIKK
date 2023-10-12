import db from "@/lib/db";
import { protectedProcedure, publicProcedure, router } from "./trpc";
import { getSession } from "next-auth/react";

export const appRouter = router({
    getTodos: publicProcedure.query(async ({ ctx }) => {
        return [1, 2, 3];
    }),
    getSecret: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),
    getEmail: protectedProcedure.query(async ({ ctx }) => {
        const email = await db.emails.findUnique({
            where: {
                id: 2,
            },
        });

        return email;
    }),
    me: protectedProcedure.query(async ({ ctx }) => {
        const user = await db.user.findUnique({
            where: {
                id: ctx.session.user.id,
            },
        });
        return user;
    }),
});

export type AppRouter = typeof appRouter;
