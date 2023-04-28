import NextLink from "next/link";

interface ILink {
    href: string;
    cssClasses: string;
    label: string;
}
export default function Link({ href, cssClasses, label }: ILink) {
    return (
        <NextLink href={href} className={cssClasses}>
            {label}
        </NextLink>
    );
}
