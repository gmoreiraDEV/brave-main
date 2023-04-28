import axios from "axios";

export async function sendContactForm(data) {
    const result = await axios.post("/api/mail", {
        data: JSON.stringify(data),
    });

    return result;
}
