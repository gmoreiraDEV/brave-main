import NextLink, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type CustomLinkProps = LinkProps & {
    className?: string;
};
export default function ActiveLink({
    children,
    className,
    ...props
}: PropsWithChildren<CustomLinkProps>) {
    return (
        <NextLink className={className} scroll={false} {...props}>
            {children}
        </NextLink>
    );
}
