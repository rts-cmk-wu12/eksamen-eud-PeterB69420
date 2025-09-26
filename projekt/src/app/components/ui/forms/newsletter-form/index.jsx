"use client";

import NewsLetter from "@/actions/newsletter";
import { useActionState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
}


export default function NewsletterForm() {
    const [formState, formAction, isPending] = useActionState(NewsLetter);

    useEffect(function () {
        console.log(formState)
    }, [formState])

    return isPending ?
        <PuffLoader
            color="#d9d9d9"
            loading={true}
            cssOverride={override}
            size={320}
        /> : (
        <form action={formAction} className="newsletter-form">
            <p className="newsletter-form__title">Tilmelding til Nyhedsbrev</p>
            <span className="newsletter-form__span">email</span>
            <input
                type="text"
                className="newsletter-form__input"
                name="email"
                placeholder="email"
            />
            <p className="newsletter-form__error">{formState?.properties?.email?.errors}</p>
            <button type="submit" className="newsletter-form__button">Tilmeld</button>
        </form>
    )
}