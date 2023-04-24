import ValenteLogo from "./Logos/Valente";

export default function Header() {
    return (
        <header className="w-full px-32 py-6 flex justify-between items-center bg-brand-base text-brand-accent">
            <ValenteLogo color="fill-brand-accent" className="w-64" />
            <nav className="flex justify-between items-center gap-2 uppercase font-bold">
                <a
                    href="#inicio"
                    className={` text-brand-off-white hover:text-brand-accent transition-colors`}
                >
                    início
                </a>
                <span className="text-brand-off-white">/</span>
                <a
                    href="#projetos"
                    className={` text-brand-off-white hover:text-brand-accent transition-colors`}
                >
                    projetos
                </a>
                <span className="text-brand-off-white">/</span>
                <a
                    href="#contato"
                    className={` text-brand-off-white hover:text-brand-accent transition-colors`}
                >
                    contato
                </a>
            </nav>
        </header>
    );
}
