import { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

const API_KEY = process.env.NEXT_API_SENDGRID;
const emailFrom = process.env.NEXT_EMAIL;

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, whatsapp, message, createdOn } = JSON.parse(
        req.body.data
    );

    mail.setApiKey(API_KEY);

    const messageToSend = `
        Nome: ${name}\r\n
        Data: ${createdOn}\r\n
        Email: ${email}\r\n
        WhatsApp: ${whatsapp}\r\n
        Mensagem: ${message}\r\n
    `;

    const data = {
        to: emailFrom,
        from: emailFrom,
        subject: "Novo contato no site",
        text: messageToSend,
        html: messageToSend.replace(/\r\n/g, "<br>"),
    };

    try {
        await mail.send(data);
    } catch (error) {
        res.status(500).json(error);

        if (error.response) {
            res.status(500).json(error.response.body);
        }
    }

    res.status(200).json({ status: "email sent" });
}
