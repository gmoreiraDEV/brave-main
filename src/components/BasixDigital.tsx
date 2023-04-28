import { CaretRight, InstagramLogo } from "@phosphor-icons/react";
import BasixDigitalLogo from "./Logos/BasixDigital";
export default function BasixDigital() {
    return (
        <section className="bg-brand-secondary flex  justify-between items-center w-full sm:p-12 py-5">
            <div
                className="w-2/3 m-auto flex flex-col-reverse xl:flex-row justify-center items-center gap-16"
                id="basix-digital"
            >
                <div className="flex flex-col items-center xl:items-end justify-between gap-5">
                    <BasixDigitalLogo
                        color="fill-brand-white"
                        className="sm:w-96 w-72"
                    />
                    <div className="flex gap-3 items-center justify-center xl:justify-start">
                        <h2 className="text-5xl text-brand-white font-extrabold">
                            Basix Digital
                        </h2>
                        <a
                            href="https://instagram.com/basix.digital"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramLogo
                                size={40}
                                weight="bold"
                                className="text-brand-accent"
                            />
                        </a>
                    </div>
                    <p className="font-regular max-w-lg text-brand-white text-center xl:text-right">
                        Frente que cuida de toda parte de Marketing, Tráfego
                        pago, Design e Desenvolvimento de Sites e Aplicativos da
                        Valente - Consultoria & Inovação, e com vários cases de
                        sucesso, vai te ajudar a desenvolver uma presença online
                        forte e atraente. Com uma combinação de design criativo
                        e tecnologia avançada, nós podemos ajudá-lo a criar uma
                        imagem de marca que se destaque na multidão. Seja você
                        um empreendedor individual ou uma pequena empresa,
                        nossos serviços podem ajudá-lo a alcançar seus
                        objetivos.
                    </p>
                    <a
                        href="https://instagram.com/basix.digital"
                        target="_blank"
                        className="flex justify-center items-center uppercase gap-2 w-full lg:w-52 h-12 p-4 bg-gradient-to-l from-brand-accent to-brand-primary rounded-lg text-brand-white font-medium"
                    >
                        <span>conhecer mais</span>
                        <CaretRight size={16} />
                    </a>
                </div>
                <img
                    src="/img/basix.jpg"
                    alt="Site Basix"
                    className="h-full max-h-[547px]"
                />
            </div>
        </section>
    );
}
