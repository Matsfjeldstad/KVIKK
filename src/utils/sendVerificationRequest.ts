import { resend } from "@/lib/resend";
import MagicLinkEmail from "../../emails/MagicLinkEmail";

type Params = {
    identifier: string;
    url: string;
    provider: string;
    theme: string;
};
type TextParams = {
    url: string;
    host: string;
};

export async function sendVerificationRequest(params: Params) {
    const { identifier, url, provider, theme } = params;
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
