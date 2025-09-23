"use client";

import LoginAction from "@/actions/loginaction";
import { useActionState } from "react";
import { PuffLoader } from "react-spinners"
import "../../../style/components/loginform.scss";

const override = {
    display: "block",
    margin: "0 auto",
}

export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(LoginAction)

    return isPending ?
        <PuffLoader
            color="#d9d9d9"
            loading={true}
            cssOverride={override}
            size={320}
        /> : (
            <form action={formAction} className="login-form">
                <span className="login-form__span">email</span>
                <input
                    type="text"
                    className="login-form__input"
                    placeholder="email"
                    name="email"
                />
                <p className="login-form__error">{formState?.properties?.email?.errors}</p>
                <span className="login-form__span">password</span>
                <input
                    type="password"
                    className="login-form__input"
                    placeholder="password"
                    name="password"
                />
                <p className="login-form__error">{formState?.properties?.password?.errors}</p>
                <button type="submit" className="login-form__button">Sign in</button>
                <p className="login-form__error">{formState?.errors}</p>
            </form>
        )
}