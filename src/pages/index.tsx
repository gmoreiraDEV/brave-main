import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RebecaLima from "../components/RebecaLima";
import BasixDigital from "../components/BasixDigital";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Valente - Consultoria & Inovação</title>
                <meta name="title" content="Valente - Consultoria e Inovação" />
                <meta
                    name="description"
                    content="Site principal da marca Valente - Consultoria & Inovação"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#F16767"
                />
                <meta name="msapplication-TileColor" content="#18122B" />
                <meta name="theme-color" content="#EFEEF2" />
            </Head>
            <main
                id="inicio"
                className={`${inter.className} h-full w-full grid auto-rows-max  overflow-x-hidden`}
            >
                <Header />
                <Hero />
                <RebecaLima />
                <BasixDigital />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
