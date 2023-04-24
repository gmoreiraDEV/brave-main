import BasixDigitalLogo from "./Logos/BasixDigital";
import RebecaLimaLogo from "./Logos/RebecaLima";

export default function Hero() {
    return (
        <section className="w-full h-full bg-bg-hero bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
            <div className="w-2/3 text-brand-off-white text-center mt-28">
                <h1 className="text-6xl font-normal">
                    Maximize seu <span className="font-bold">potencial</span>{" "}
                    com nossos
                    <span className="ml-4 font-bold">serviços integrados</span>
                </h1>
                <p className="font-medium w-2/3 m-auto mt-4 text-xl">
                    Você pode transformar sua saúde, sua rotina alimentar e até
                    mesmo a imagem e processos da sua marca pessoal, conheça
                    nossas frentes de trabalho para alavancar seus resultados
                </p>
            </div>
            <span className="my-16 w-52 h-12 p-4 bg-gradient-to-l from-brand-accent to-brand-primary rounded-lg text-brand-white flex items-center justify-center font-medium">
                Escolha um projeto
            </span>
            <div className="flex justify-center items-center gap-12 mb-28">
                <div className="flex justify-center items-center bg-brand-white rounded-lg w-72 h-60 cursor-pointer hover:scale-110 transition-transform">
                    <a
                        href="#rebeca-lima"
                        className="w-full h-full flex justify-center items-center"
                    >
                        <RebecaLimaLogo
                            color="fill-brand-accent"
                            className="w-56"
                        />
                    </a>
                </div>
                <div className="flex justify-center items-center bg-brand-white rounded-lg w-72 h-60 cursor-pointer hover:scale-110 transition-transform">
                    <a
                        href="#basix-digital"
                        className="w-full h-full flex justify-center items-center"
                    >
                        <BasixDigitalLogo
                            color="fill-brand-accent"
                            className="w-56"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
