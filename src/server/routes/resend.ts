import db from "@/lib/db";
import { protectedProcedure, router } from "../trpc";
import { z } from "zod";
import { sendMailFromDraft } from "@/utils/sendMailFromDrafts";

export const resendRoute = router({
    sendDraft: protectedProcedure
        .input(
            z.object({
                from: z.string().email(),
                to: z.string().email(),
                subject: z.string(),
                text: z.string(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            try {
                const email = await sendMailFromDraft({
                    from: input.from,
                    to: input.to,
                    subject: input.subject,
                    text: input.text,
                });
                return email;
            } catch (error) {
                throw new Error("Failed to send the verification Email.");
            }
        }),
});
