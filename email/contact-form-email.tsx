import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Section,
  Text,
  Link,
  Preview,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-gray-800">
          <Container className="my-10 mx-auto p-6 bg-white rounded-md shadow-md max-w-full">
            <Section className="mb-4 text-center">
              <Img
                src="https://res.cloudinary.com/dcukvioe2/image/upload/v1722677237/main_ekkbkw.png"
                alt="Portfolio Site Logo"
                className="mx-auto mb-4"
                width={100}
                height={80}
              />
              <Heading className="text-2xl font-semibold leading-normal">
                New Message from Portfolio Contact Form
              </Heading>
              <Text className="bg-blue-500 text-white py-1 px-3 rounded-full inline-block mt-2">
                Portfolio Contact
              </Text>
              <Hr className="my-4" />
            </Section>
            <Section className="mb-4">
              <Text className="text-lg">
                <strong>Message:</strong>
              </Text>
              <Text className="mt-2">{message}</Text>
            </Section>
            <Hr className="my-4" />
            <Section>
              <Text className="text-lg">
                <strong>Sender's Email:</strong>
              </Text>
              <Link href={`mailto:${senderEmail}`} className="text-blue-600 underline">
                {senderEmail}
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
