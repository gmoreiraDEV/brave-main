import { Info as InfoIcon } from "@phosphor-icons/react";
import { BEFORE } from "./config";

interface IInfo {
    message: string;
    active: boolean;
}
export default function Info({ message, active }: IInfo) {
    return (
        <div
            className={`flex flex-col justify-center fixed right-0 bottom-0 m-5 z-50 toast-transition overflow-x-hidden rounded-lg
            ${
                active
                    ? `${BEFORE} translate-x-0`
                    : "translate-x-[calc(100%+50px)]"
            }
            `}
        >
            {" "}
            <div className="flex items-center bg-blue-400 border-l-4 border-blue-700 py-2 px-3 shadow-md mb-2">
                <div className="text-brand-white mr-3">
                    <InfoIcon size={32} />
                </div>
                <div className="text-brand-white max-w-xs ">{message}</div>
            </div>
        </div>
    );
}
