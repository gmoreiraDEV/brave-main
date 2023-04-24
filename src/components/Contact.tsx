import ContactForm from "./ContactForm";
import Map from "./Map";
export default function Contact() {
    return (
        <section
            id="contato"
            className="border-t-2 border-brand-off-white bg-brand-tertiary w-full p-14"
        >
            <div className="w-2/3 m-auto">
                <h2 className="text-center text-5xl text-brand-white font-extrabold mb-14">
                    Entre em contato com a gente
                </h2>
                <div className="flex items-stretch justify-around">
                    <ContactForm />
                    <Map />
                </div>
            </div>
        </section>
    );
}
