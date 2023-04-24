import { useEffect, useMemo, useState } from "react";
import * as yup from "yup";
import Success from "./ToastNotification/Success";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendContactForm } from "../services/api";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export type IContactFormData = yup.InferType<typeof schema>;

const schema = yup
    .object({
        name: yup.string().required("O nome é necessário"),
        email: yup
            .string()
            .email("O email precisa ser válido")
            .required("O email é necessário"),
        whatsapp: yup
            .string()
            .required("O WhatsApp é necessário")
            .matches(
                /^([0-9]{2})([0-9]{8}|[0-9]{9})/g,
                "O número deve conter o ddd + 8 ou 9 dígitos. Ex.: 1199998888"
            ),
        message: yup.string().required("A mensagem é necessária"),
    })
    .required();

const WHATSAPP_LINK = process.env.NEXT_PUBLIC_WHATSAPP_LINK;
export default function ContactForm() {
    const [toastActive, setToastActive] = useState(false);
    const defaultValues: IContactFormData = useMemo(
        () => ({
            name: "",
            email: "",
            whatsapp: "",
            message: "",
        }),
        []
    );

    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
    } = useForm<IContactFormData>({
        resolver: yupResolver(schema),
        defaultValues,
    });

    async function onSubmit(data: IContactFormData) {
        const createdOn = new Date().toLocaleDateString("pt-BR");
        const { name, email, whatsapp, message } = data;
        const result = {
            name,
            email,
            whatsapp: `${WHATSAPP_LINK}${whatsapp}`,
            message,
            createdOn: createdOn,
        };
        await sendContactForm(result);
        setToastActive(true);

        setTimeout(() => {
            setToastActive(false);
        }, 3100);
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset(defaultValues);
        }
    }, [formState, defaultValues, reset]);

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label className="text-brand-white text-base" htmlFor="name">
                    Nome
                </label>
                <input
                    type="text"
                    placeholder="Seu nome por favor?"
                    className="w-96 h-12 rounded-lg p-2 bg-brand-white placeholder-brand-secondary"
                    id="name"
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="text-sm text-red-600">
                        {errors.name.message}
                    </span>
                )}
            </div>
            <div className="flex flex-col">
                <label className="text-brand-white text-base" htmlFor="email">
                    Email
                </label>
                <input
                    type="text"
                    placeholder="Coloque seu melhor email ein?!"
                    className="w-96 h-12 rounded-lg p-2 bg-brand-white placeholder-brand-secondary"
                    id="email"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className="text-sm text-red-600">
                        {errors.email.message}
                    </span>
                )}
            </div>
            <div className="flex flex-col">
                <label
                    className="text-brand-white text-base"
                    htmlFor="whatsapp"
                >
                    WhatsApp
                </label>
                <input
                    type="text"
                    placeholder="Posso pedir seu WhatsApp?"
                    className="w-96 h-12 rounded-lg p-2 bg-brand-white placeholder-brand-secondary"
                    id="whatsapp"
                    {...register("whatsapp", { required: true })}
                />
                {errors.whatsapp && (
                    <span className="text-sm text-red-600">
                        {errors.whatsapp.message}
                    </span>
                )}
            </div>
            <div className="flex flex-col">
                <label className="text-brand-white text-base" htmlFor="message">
                    Mensagem
                </label>
                <textarea
                    rows={10}
                    placeholder="Seja gentil com as palavras =D"
                    className="w-96 rounded-lg p-2 bg-brand-white placeholder-brand-secondary"
                    id="message"
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <span className="text-sm text-red-600">
                        {errors.message.message}
                    </span>
                )}
            </div>
            <button
                className="flex justify-center items-center uppercase gap-2 w-full h-12 p-4 bg-gradient-to-l from-brand-accent to-brand-primary rounded-lg text-brand-white font-medium"
                type="submit"
            >
                <span>Enviar mensagem</span>
                <PaperPlaneTilt size={16} weight="fill" />
            </button>
            <Success
                message="Sua mensagem foi enviada com sucesso"
                active={toastActive}
            />
            {/* {isSubmitSuccessful && (
            )} */}
        </form>
    );
}
