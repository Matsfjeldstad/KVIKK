import { resend } from "@/lib/resend";
import MagicLinkEmail from "../../emails/MagicLinkEmail";
import { Interface } from "readline";

interface SendVerificationRequestParams {
    identifier: string;
    url: string;
}

type TextParams = {
    url: string;
    host: string;
};

export async function sendVerificationRequest(params: SendVerificationRequestParams) {
    const { identifier, url } = params;
    const { host } = new URL(url);

    try {
        const data = await resend.emails.send({
            from: "KVIKK <onboarding@resend.dev>",
            to: [identifier],
            subject: `Log in to KVIKK ${host}`,
            text: text({ url, host }),
            react: MagicLinkEmail({ url, host }),
        });
        return { success: true, data };
    } catch (error) {
        throw new Error("Failed to send the verification Email.");
    }
}

function text({ url, host }: TextParams) {
    return `Sign in to ${host}\n${url}\n\n`;
}
