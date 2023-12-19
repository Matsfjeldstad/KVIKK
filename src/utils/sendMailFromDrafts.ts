// import { resend } from "@/lib/resend";
import MagicLinkEmail from "../../emails/MagicLinkEmail";
import { Resend } from "resend";
import MailSendtFrom from "../../emails/MailSendtFromKvikk";

// interface SendVerificationRequestParams {
//     identifier: string;
//     url: string;
// }

type MailParams = {
    from: string;
    to: string;
    subject: string;
    text: string;
};

export async function sendMailFromDraft({
    from,
    to,
    subject,
    text,
}: MailParams) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // split email from @
    const fromMail = from.split("@");

    try {
        await resend.emails.send({
            from: `${fromMail[0]} <${fromMail[0]}@kvikkmail.com>`,
            to: [to, from],
            subject: subject,
            text: text,
            react: MailSendtFrom({ from: from, text: text }),
        });
        return true;
    } catch (error) {
        throw new Error("Failed to send the verification Email.");
    }
}
