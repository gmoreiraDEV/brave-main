import { CaretRight, InstagramLogo } from "@phosphor-icons/react";
import RebecaLimaLogo from "./Logos/RebecaLima";

export default function RebecaLima() {
    return (
        <section
            id="projetos"
            className="bg-brand-off-white flex justify-between items-center w-screen p-12"
        >
            <div
                className="w-2/3 m-auto flex flex-col lg:flex-row justify-center items-center gap-16"
                id="rebeca-lima"
            >
                <img
                    src="/img/rebeca-lima.png"
                    alt="Foto Rebeca Lima"
                    className="max-w-xs"
                />
                <div className="flex flex-col items-center lg:items-start justify-between gap-5">
                    <RebecaLimaLogo
                        color="fill-brand-secondary"
                        className="sm:w-96 w-72"
                    />
                    <div>
                        <div className="flex gap-3 items-center justify-center lg:justify-start">
                            <h2 className="text-5xl text-center lg:text-left text-brand-secondary font-extrabold">
                                Rebeca Lima
                            </h2>
                            <a
                                href="https://instagram.com/rebecalimanutri"
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
                        <p className="font-regular max-w-lg text-center lg:text-left text-brand-secondary">
                            Nutricionista e Chef de Cozinha com ampla
                            experiência, fará com que seus objetivos
                            nutricionais sejam alcançados através de consultas e
                            plano alimentar personalizados, sem deixar de lado a
                            praticidade e sabor dos alimentos. O serviço de
                            Personal Chef é para aqueles que desejam uma
                            alimentação saudável e personalizada, sem precisar
                            se preocupar com o preparo das refeições. Temos tudo
                            o que você precisa para criar um menu personalizado
                            que atenda às suas necessidades e preferências
                            alimentares.
                        </p>
                    </div>
                    <a
                        href="https://instagram.com/rebecalimanutri"
                        target="_blank"
                        className="flex justify-center items-center uppercase gap-2 w-full lg:w-52 h-12 p-4 bg-gradient-to-l from-brand-accent to-brand-primary rounded-lg text-brand-white font-medium"
                    >
                        <span>conhecer mais</span>
                        <CaretRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
