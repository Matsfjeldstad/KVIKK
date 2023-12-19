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
} from "@react-email/components";
import { formatEmailText } from "@/lib/utils";

type Props = {
    text: string;
    from: string;
};

export default function MailSendtFrom({ text, from }: Props) {
    const splitTextArray = text.split("\\n");

    return (
        <Html>
            <Head />
            <Preview>
                Mail from {from ? from : "unknown@unknown.com"} sent from KVIKK
            </Preview>
            <Tailwind>
                <Body className="bg-gray-200">
                    <Container className=" p-[40px] font-sans mt-[40px] rounded-3xl">
                        <Heading className="my-[40px]">
                            Mail from {from ? from : "unknown@unknown.com"}
                        </Heading>

                        {splitTextArray.map((splitText, index) => (
                            <Text key={index} className="text-lg">
                                {splitText}
                            </Text>
                        ))}
                        <Text className="my-[40px]">
                            {" "}
                            Sent and generated using{" \n\n\n"}
                            <Link href="https://www.kvikkmail.com">
                                {" "}
                                Kvikkmail.com
                            </Link>{" "}
                        </Text>
                        <Img
                            src="https://raw.githubusercontent.com/Matsfjeldstad/KVIKK/master/public/KVIKK.png"
                            alt="KVIKK logo"
                            width="120"
                            height="40"
                            className="object-cover object-center rounded-[12px]"
                        />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
