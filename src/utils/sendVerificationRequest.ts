// import { resend } from "@/lib/resend";
import MagicLinkEmail from "../../emails/MagicLinkEmail";
import { SendVerificationRequestParams } from 'next-auth/providers/email';
import { Resend } from "resend";


// interface SendVerificationRequestParams {
//     identifier: string;
//     url: string;
// }


type TextParams = {
    url: string;
    host: string;
};

export async function sendVerificationRequest(params: SendVerificationRequestParams) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { identifier, url } = params;
    const { host } = new URL(url);

    try {
        await resend.emails.send({
            from: "KVIKK Login <onboarding@kvikkmail.com>",
            to: identifier,
            subject: `Log in to KVIKK ${host}`,
            text: text({ url, host }),
            react: MagicLinkEmail({ url, host }),
        });
    } catch (error) {
        throw new Error("Failed to send the verification Email.");
    }
}

function text({ url, host }: TextParams) {
    return `Sign in to ${host}\n${url}\n\n`;
}
