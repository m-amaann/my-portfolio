"use server";
import React from "react";
import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const sendEmail = async (values: { email: string; subject: string; message: string }) => {
  console.log("Sending email with values:", values);
  console.log("Using Resend API key:", process.env.RESEND_API_KEY);

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "amaan.rcm@gmail.com",
      subject: values.subject, // Use the subject from form values
      reply_to: values.email,
      react: React.createElement(ContactFormEmail, {
        message: values.message,
        senderEmail: values.email,
      }),
    });
  } catch (error) {
    console.error("Error sending email:", getErrorMessage(error));
    return {
      error: getErrorMessage(error),
    };
  }
  console.log("Email sent successfully:", data);
  return {
    data,
  };
};
