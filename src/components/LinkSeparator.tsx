import { DotOutline } from "@phosphor-icons/react";

interface ISeparator {
    cssClasses: string;
    size?: string | number;
}

export default function LinkSeparator({ cssClasses, size }: ISeparator) {
    return <DotOutline size={size} weight="fill" className={cssClasses} />;
}
