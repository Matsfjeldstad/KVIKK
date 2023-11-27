import db from "@/lib/db";
import { protectedProcedure, router } from "../trpc";
import { z } from "zod";

export const userRoute = router({
    getSessionUser: protectedProcedure.query(async ({ ctx }) => {
        const user = ctx.session.user;
        return user;
    }),
    updateUser: protectedProcedure
        .input(
            z.object({
                name: z.optional(z.string()),
                email: z.optional(z.string().email()),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const user = await db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    ...input,
                },
            });
            return user;
        }),
});
