import React from "react";

type Props = {};

export default function page({}: Props) {
    return (
        <main className="my-20 min-h-screen">
            <section className="max-w-7xl mx-auto p-6">
                <h1 className="text-4xl">Terms and Conditions</h1>
                <p>
                    These terms and conditions apply to the use of Kvikk, a
                    service provided by Kvikk AS, located at [address].
                </p>

                <ol>
                    <li>Definitions</li>
                    <li>Access to the Service</li>
                    <li>Use of the Service</li>
                    <li>Payment</li>
                    <li>Changes to the Terms and Conditions</li>
                    <li>Termination</li>
                </ol>
                <div className="flex flex-col gap-3 mt-20">
                    <h2 className="text-2xl">1. Definitions</h2>
                    <p className="text-gray-400">
                        &quot;Kvikk&quot; refers to Kvikk AS and the Kvikk
                        service.
                        <br />
                        &quot;Service&quot; refers to the Kvikk service, which
                        offers AI-powered email templates and email sending.
                        <br />
                        &quot;User&quot; refers to any person who uses the
                        Service.
                    </p>

                    <h2 className="text-2xl">2. Access to the Service</h2>

                    <p className="text-gray-400">
                        Kvikk is available to anyone who registers as a user.
                        <br />
                        To register as a user, you must provide a valid name,
                        email address, and password.
                        <br />
                        Kvikk reserves the right to deny access to the Service
                        to persons who violate these terms and conditions.
                    </p>

                    <h2 className="text-2xl">3. Use of the Service</h2>

                    <p className="text-gray-400">
                        The User may use the Service to generate and send
                        emails.
                        <br />
                        The User may use the Service to store email templates.
                        <br />
                        The User may use the Service to send emails to other
                        persons.
                        <br />
                        The User is responsible for all emails sent through the
                        Service.
                        <br />
                        The User must not use the Service to send emails that
                        are illegal, offensive, or harmful.
                    </p>
                    <h2 className="text-2xl">4. Payment</h2>
                    <p className="text-gray-400">
                        Free users can generate and send up to 10 emails per
                        month.
                        <br /> Paying users can generate and send unlimited
                        emails.
                        <br />
                        Payment is through Stripe.
                        <br />
                        Kvikk reserves the right to change the pricing structure
                        of the Service.
                    </p>

                    <h2 className="text-2xl">
                        5. Changes to the Terms and Conditions
                    </h2>

                    <p className="text-gray-400">
                        Kvikk may change these terms and conditions at any time.
                        <br />
                        The User will be notified of changes to the terms and
                        conditions via email.
                        <br />
                        The User may continue to use the Service after the
                        changes have taken effect, but is bound by the new terms
                        and conditions.
                    </p>

                    <h2 className="text-2xl">6. Termination</h2>

                    <p className="text-gray-400">
                        Free users can terminate the Service at any time.
                        <br />
                        Paying users can terminate the Service with 30
                        days&apos; notice.
                        <br />
                        Kvikk may terminate the Service for any User if the User
                        violates these terms and conditions.
                    </p>
                    <h2 className="text-2xl">7. Liability</h2>

                    <p className="text-gray-400">
                        Kvikk is not liable for any loss or damage arising from
                        the use of the Service.
                        <br />
                        Kvikk is not liable for emails sent through the
                        Service.
                    </p>

                    <h2 className="text-2xl">
                        8. Governing Law and Jurisdiction
                    </h2>

                    <p className="text-gray-400">
                        These terms and conditions shall be governed by
                        Norwegian law.
                        <br />
                        Any dispute arising out of these terms
                        and conditions shall be resolved by a Norwegian court.
                    </p>

                    <h2 className="text-2xl">9. Contact Information</h2>

                    <p className="text-gray-400">
                        If you have any questions or comments about these terms
                        and conditions, you can contact Kvikk at [email address]
                        or [phone number].
                    </p>
                </div>
            </section>
        </main>
    );
}
