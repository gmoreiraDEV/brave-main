import { createTransport } from "nodemailer";

const email = process.env.NEXT_EMAIL;
const pass = process.env.NEXT_EMAIL_PASS;

export const transporter = createTransport({
    service: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
        user: email,
        pass,
    },
});

export const mailOptions = {
    from: email,
    to: email,
};
