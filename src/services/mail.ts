import { createTransport } from "nodemailer";

const email = process.env.NEXT_EMAIL;
const pass = process.env.NEXT_EMAIL_PASS;
const smpt = process.env.NEXT_SMTP_SEND;
const smptPort = process.env.NEXT_SMTP_PORT;

export const transporter = createTransport({
    service: smpt,
    port: smptPort,
    auth: {
        user: email,
        pass,
    },
});

export const mailOptions = {
    from: email,
    to: email,
};
