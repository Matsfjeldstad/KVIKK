import db from "@/lib/db";
import { protectedProcedure, router } from "./trpc";
import { z } from "zod";
import { userRoute } from "./routes/user";

export const appRouter = router({
    getAllEmailDraftsInfinite: protectedProcedure
        .input(
            z.object({
                limit: z.number().min(1).max(100).nullish(),
                cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
            })
        )
        .query(async (opts) => {
            const { input } = opts;
            const limit = input.limit ?? 50;
            const { cursor } = input;
            const emails = await db.emails.findMany({
                take: limit + 1, // get an extra item at the end which we'll use as next cursor
                where: {
                    author_id: opts.ctx.session.user.id,
                },
                cursor: cursor ? { id: cursor } : undefined,
                orderBy: {
                    created_at: "desc",
                },
            });

            let nextCursor: typeof cursor | undefined = undefined;
            if (emails.length > limit) {
                const nextItem = emails.pop();
                nextCursor = nextItem!.id;
            }

            return {
                emails,
                nextCursor,
            };
        }),

    getAllEmailDrafts: protectedProcedure.query(async ({ ctx }) => {
        const drafts = await db.emails.findMany({
            take: 10,
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

    user: userRoute,
});

export type AppRouter = typeof appRouter;
