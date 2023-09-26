import * as React from "react";

import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Img,
    Text,
    Tailwind,
    Button,
} from "@react-email/components";

type Props = {
    url: string;
    host: string;
};

export default function MagicLinkEmail({ url, host }: Props) {
    return (
        <Html>
            <Head />
            <Preview>Log in with this magic link</Preview>
            <Tailwind>
                <Body>
                    <Container className="bg-gray-200 p-[40px] font-sans mt-[40px] rounded-3xl">
                        <Img
                            src="https://raw.githubusercontent.com/Matsfjeldstad/KVIKK/master/public/KVIKK.png"
                            alt="KVIKK logo"
                            width="120"
                            height="40"
                            className="object-cover object-center rounded-[12px]"
                        />

                        <Heading className="my-[40px]">
                            Log in to KVIKK {host}
                        </Heading>

                        <Button
                            href={url}
                            target="_blank"
                            className="p-[16px] rounded-lg bg-purple-600 text-white "
                        >
                            Click here to log in with this magic link
                        </Button>

                        <Text className="my-[40px]">
                            If you were not expecting this invitation, you can
                            ignore this email. If you are concerned about your
                            account&apos;s safety, please reply to this email to get
                            in touch with us.
                        </Text>

                        <Text>
                            <Link
                                href="https://matsfjeldstad.no"
                                target="_blank"
                                className="text-gray-400"
                            >
                                Mats Fjeldstad
                            </Link>
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
