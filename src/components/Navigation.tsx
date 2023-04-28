import { Disclosure } from "@headlessui/react";
import { List, X } from "@phosphor-icons/react";
import Link from "./Link";
import LinkSeparator from "./LinkSeparator";

const navigation = [
    { name: "Início", href: "#inicio", current: true },
    { name: "Projetos", href: "#projetos", current: false },
    { name: "Contato", href: "#contato", current: false },
];

const cssClasses = {
    mobile: {
        wrapper:
            "lg:hidden flex flex-col justify-center items-center gap-4 absolute top-0 left-0 bg-brand-base w-full h-screen z-20",
        link: "text-brand-off-white hover:text-brand-accent transition-all hover:underline underline-offset-8 decoration-brand-accent hover:decoration-dotted decoration-2 text-lg",
    },

    desktop: {
        link: "text-brand-off-white hover:text-brand-accent transition-all hover:underline underline-offset-8 decoration-brand-accent hover:decoration-dotted decoration-2",
        separator: "text-brand-off-white",
    },
};

export default function Navigation() {
    return (
        <Disclosure
            as="nav"
            className="flex justify-between items-center gap-2 uppercase font-bold"
        >
            {({ open }) => (
                <>
                    <div className="sm:flex relative hidden h-16 items-center justify-between">
                        {navigation.map(
                            (item, idx, arr) => (
                                console.log("###", item.href),
                                (
                                    <>
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cssClasses.desktop.link}
                                        >
                                            {item.name}
                                        </Link>
                                        {arr.length - 1 !== idx && (
                                            <LinkSeparator
                                                size={30}
                                                cssClasses={
                                                    cssClasses.desktop.separator
                                                }
                                            />
                                        )}
                                    </>
                                )
                            )
                        )}
                    </div>

                    <Disclosure.Button className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-white hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-white">
                        <span className="sr-only">Abrir menu</span>
                        {open ? (
                            <X size={40} className="z-30" />
                        ) : (
                            <List size={40} />
                        )}
                    </Disclosure.Button>

                    <Disclosure.Panel className={cssClasses.mobile.wrapper}>
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as={Link}
                                href={item.href}
                                className={cssClasses.desktop.link}
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
