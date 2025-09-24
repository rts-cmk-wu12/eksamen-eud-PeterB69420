"use client";

import CreateUser from "@/actions/create-user";
import { useActionState, useEffect } from "react";
import "../../../style/components/registerform.scss";

export default function CreateUserForm() {
    const [formState, formAction, isPending] = useActionState(CreateUser);

    useEffect(function () {
        console.log(formState)
    }, [formState])

    return (
        <form action={formAction} className="register-form">
            <label>
                <span className="register-form__span">email</span>
                <input
                    type="text"
                    className="register-form__input"
                    placeholder="email"
                    name="email"
                />
            </label>
            <p className="register-form__error">{formState?.properties?.email?.errors}</p>
            <label>
                <span className="register-form__span">password</span>
                <input
                    type="password"
                    className="register-form__input"
                    placeholder="password"
                    name="password"
                />
            </label>
            <div className="register-form__name">
                <label>
                    <span className="register-form__span">firstname</span>
                    <input
                        type="text"
                        className="register-form__input"
                        name="firstname"
                        placeholder="first name"
                    />
                </label>
                <p className="register-form__error">{formState?.properties?.firstname?.errors}</p>
                <label>
                    <span className="register-form__span">lastname</span>
                    <input
                        type="text"
                        className="register-form__input"
                        name="lastname"
                        placeholder="last name"
                    />
                </label>
                <p className="register-form__error">{formState?.properties?.lastname?.errors}</p>
            </div>
            <p className="register-form__error">{formState?.properties?.password?.errors}</p>
            <button type="submit" className="register-form__button">Register</button>
            <p className="register-form__error">{formState?.errors}</p>
        </form>
    )
}