"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { z } from "zod";

export default async function LoginAction(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const schema = z.object({
        email: z.string().min(1, { message: "Email skal være udfyldt"}),
        password: z.string().min(1, { message: "adgangskode skal være udfyldt"})
    });
    

    const validated = schema.safeParse({
        email,
        password
    });
    
    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error)),
    }

    const response = await fetch(`${process.env.API_AUTH_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: validated.data.email,
            password: validated.data.password
        })
    });

    if(!response.ok) return {
        success: false,
        errors: ["Email eller adgangskode er forkert"],
    };

    const data = await response.json()
    const cookieStore = await cookies();

    const cookieOptions = {
        maxAge: 60 * 60,
        httpOnly: true,
        path: "/"

    }

    cookieStore.set("auth_token", data.token, cookieOptions)
    cookieStore.set("user_id", data.userId.toString(), cookieOptions);

    redirect("/");
}