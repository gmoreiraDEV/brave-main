import ValenteLogo from "./Logos/Valente";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="w-screen lg:px-32 p-6 flex justify-between items-center gap-4 bg-brand-base text-brand-accent relative">
            <img
                src="img/vlnt-back.png"
                className="w-1/2 sm:hidden"
                alt="Logo Valente Consultoria e Inovação"
            />
            <ValenteLogo
                color="fill-brand-accent"
                className="hidden sm:flex w-64"
            />
            <Navigation />
        </header>
    );
}
