"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resendApiKey = process.env.RESEND_API_KEY;
const senderEmail = process.env.SENDER_EMAIL;
const toEmail = process.env.TO_EMAIL;

if (!resendApiKey || !senderEmail || !toEmail) {
  throw new Error("Missing required environment variables");
}

const resend = new Resend(resendApiKey);

export const sendEmail = async (formData: FormData) => {
  const senderEmailFromForm = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  console.log('Resend API Key:', resendApiKey);
  console.log('Sender Email:', senderEmailFromForm);
  console.log('Message:', message);

  if (!validateString(senderEmailFromForm, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: `Contact Form <${senderEmail}>`,
      to: toEmail,
      subject: "Message from contact form",
      reply_to: senderEmailFromForm,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmailFromForm,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

