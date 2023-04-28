import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
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
            "lg:hidden flex flex-col justify-center items-center gap-4 absolute top-0 left-0 bg-brand-base w-full h-screen z-10",
        link: {
            current:
                "underline underline-offset-8 decoration-brand-accent decoration-dotted decoration-2",
            normal: "hover:text-brand-accent transition-colors",
            all: "text-brand-off-white text-lg",
        },
    },
    desktop: {
        link: {
            current:
                "underline underline-offset-8 decoration-brand-accent decoration-dotted decoration-2",
            normal: "hover:text-brand-accent transition-colors",
            all: "text-brand-off-white",
        },
        separator: "text-brand-off-white",
    },
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
    return (
        <Disclosure
            as="nav"
            className="flex justify-between items-center gap-2 uppercase font-bold"
        >
            {({ open }) => (
                <>
                    <div className="sm:flex relative hidden h-16 items-center justify-between">
                        {navigation.map((item, idx, arr) => (
                            <>
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    label={item.name}
                                    cssClasses={classNames(
                                        item.current
                                            ? cssClasses.desktop.link.current
                                            : cssClasses.desktop.link.normal,
                                        cssClasses.desktop.link.all
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                />
                                {arr.length - 1 !== idx && (
                                    <LinkSeparator
                                        size={30}
                                        cssClasses={
                                            cssClasses.desktop.separator
                                        }
                                    />
                                )}
                            </>
                        ))}
                    </div>

                    <Disclosure.Button className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-white hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-white">
                        <span className="sr-only">Abrir menu</span>
                        {open ? (
                            <X size={40} className="z-20" />
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
                                label={item.name}
                                cssClasses={classNames(
                                    item.current
                                        ? cssClasses.mobile.link.current
                                        : cssClasses.mobile.link.normal,
                                    cssClasses.mobile.link.all
                                )}
                                aria-current={item.current ? "page" : undefined}
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        // <nav className="flex justify-between items-center gap-2 uppercase font-bold">
        //     {isMobileView && (
        //         <List size={32} className="pointer" onClick={handleMobile} />
        //     )}
        //     {activeNav && (
        //         <div className={cssClasses.mobile.wrapper}>
        //             <Link
        //                 cssClasses={cssClasses.mobile.link}
        //                 href="#inicio"
        //                 label="início"
        //             />
        //             <Link
        //                 cssClasses={cssClasses.mobile.link}
        //                 href="#projetos"
        //                 label="projetos"
        //             />
        //             <Link
        //                 cssClasses={cssClasses.mobile.link}
        //                 href="#contato"
        //                 label="contato"
        //             />
        //         </div>
        //     )}

        //     {!isMobileView && (
        //         <>
        //             <Link
        //                 cssClasses={cssClasses.desktop.link}
        //                 href="#inicio"
        //                 label="início"
        //             />
        //             <LinkSeparator
        //                 size={30}
        //                 cssClasses={cssClasses.desktop.separator}
        //             />
        //             <Link
        //                 cssClasses={cssClasses.desktop.link}
        //                 href="#projetos"
        //                 label="projetos"
        //             />
        //             <LinkSeparator
        //                 size={30}
        //                 cssClasses={cssClasses.desktop.separator}
        //             />
        //             <Link
        //                 cssClasses={cssClasses.desktop.link}
        //                 href="#contato"
        //                 label="contato"
        //             />
        //         </>
        //     )}
        // </nav>
    );
}
