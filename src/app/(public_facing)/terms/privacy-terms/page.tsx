import React from "react";

type Props = {};

export default function page({}: Props) {
    return (
        <main className="my-20 min-h-screen">
            <section className="max-w-7xl mx-auto">
                <div className="max-w-2xl flex flex-col gap-4">
                    <h1 className="text-4xl">Privacy Policy</h1>
                    <p className="text-gray-400">
                        We are committed to protecting your privacy. This
                        privacy policy explains what information we collect from
                        you and how we use it.
                    </p>
                </div>
                <div className="flex flex-col gap-6 mt-10 max-w-2xl">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl">1. Information We Collect</h2>
                        <div className="text-gray-400 flex flex-col gap-2">
                            We collect the following information from you:
                            <ul className="list-disc ml-10">
                                <li>Your name</li>
                                <li>Your email address</li>
                                <li>Your IP address</li>
                                <li>
                                    Metadata about your online activity, such as
                                    the pages you visit and the links you click
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl">
                            2. How We Use Your Information
                        </h2>
                        <div className="text-gray-400 flex flex-col gap-2">
                            We use the information we collect from you to:
                            <ul className="list-disc ml-10">
                                <li>Provide you with our services</li>
                                <li>Improve our services</li>
                                <li>
                                    Send you marketing emails (only with your
                                    consent)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl">
                            3. Sharing Your Information
                        </h2>
                        <p className="text-gray-400">
                            We do not share your personal information with any
                            third parties. We may share metadata about your
                            online activity with third-party analytics tools,
                            such as Google Analytics and Hotjar. However, we
                            will only share this data in a way that does not
                            identify you personally.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl">4. Your Choices</h2>
                        <p className="text-gray-400">
                            You can choose to opt out of receiving marketing
                            emails from us by clicking the unsubscribe link at
                            the bottom of any marketing email we send you.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl">
                            5. Protecting Your Information
                        </h2>
                        <p className="text-gray-400">
                            We use a variety of security measures to protect
                            your information from unauthorized access, use, or
                            disclosure.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl">
                            6. Changes to This Privacy Policy
                        </h2>
                        <p className="text-gray-400">
                            We may update this privacy policy from time to time.
                            If we make any changes, we will post the updated
                            privacy policy on our website.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl">7. Contact Us</h2>
                        <p className="text-gray-400">
                            If you have any questions about this privacy policy,
                            please contact us at [email address]. This privacy
                            policy is based on the information you have provided
                            me. It is important to note that this is just a
                            sample privacy policy. You may need to modify it to
                            fit your specific business and data collection
                            practices.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
