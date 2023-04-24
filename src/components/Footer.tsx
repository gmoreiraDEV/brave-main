export default function Footer() {
    return (
        <footer className="w-full flex justify-between items-center h-24 bg-brand-base">
            <div className="w-2/3 m-auto flex justify-between items-center text-brand-white">
                <div className="flex gap-4">
                    <img
                        src="/img/vlnt-back.png"
                        alt="Logo Valente - Consultoria & Inovação"
                        className="max-w-[200px]"
                    />
                    <div>
                        <strong>
                            Copyright © 2023 Valente Consultoria e Inovação LTDA
                            / CNPJ: 31.803.058/0001-05
                        </strong>
                        <p>
                            Av. Paulista, 1471 - Conj 1110, Jd. Paulista - São
                            Paulo - SP, 01311-927
                        </p>
                    </div>
                </div>
                <div>
                    <a href="https://basixdigital.com.br">
                        <img
                            src="/img/x-logo.png"
                            alt="Basix Digital"
                            className="w-11 h-11"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
