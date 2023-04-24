import { CheckCircle } from "@phosphor-icons/react";
import { BEFORE } from "./config";

interface ISuccess {
    message: string;
    active: boolean;
}

export default function Success({ message, active }: ISuccess) {
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
            <div className="flex items-center bg-green-500 py-2 px-3 shadow-md">
                <div className="text-brand-white mr-3">
                    <CheckCircle size={32} />
                </div>
                <div className="text-brand-white max-w-xs ">{message}</div>
            </div>
        </div>
    );
}
