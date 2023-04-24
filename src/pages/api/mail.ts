import { mailOptions, transporter } from "@/src/services/mail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log("###", req.body);

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "Teste",
            text: "This is a test text",
            html: "<h1>Test Title</h1>",
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}
