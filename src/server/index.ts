import db from "@/lib/db";
import { protectedProcedure, publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
    getAllEmailDrafts: protectedProcedure.query(async ({ ctx }) => {
        const drafts = await db.emails.findMany({
            orderBy: [
                {
                    created_at: "desc",
                },
            ],
            where: {
                author_id: ctx.session?.user?.id,
            },
        });
        return drafts;
    }),
    getEmail: protectedProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input, ctx }) => {
            const email = await db.emails.findUnique({
                where: {
                    id: input.id,
                    author_id: ctx.session.user.id,
                },
            });

            return email;
        }),

    deleteEmail: protectedProcedure
        .input(z.object({ id: z.number() }))
        .mutation(async ({ input, ctx }) => {
            const email = await db.emails.findUnique({
                where: {
                    id: input.id,
                    author_id: ctx.session.user.id,
                },
            });
            if (!email) {
                throw new Error("Email not found");
            }
            await db.emails.delete({
                where: {
                    id: email.id,
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
