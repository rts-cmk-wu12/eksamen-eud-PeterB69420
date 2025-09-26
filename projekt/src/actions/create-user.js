"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import z from "zod"

export default async function CreateUser(prevState, formData) {
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");

    const schema = z.object({
        firstname: z.string().min(1, { message: "Navn skal være udfyldt" }),
        lastname: z.string().min(1, { message: "Efternavn skal være udfyldt" }),
        email: z.string().min(1, { message: "Email skal være udfyldt" }),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt" })
    });

    const validated = schema.safeParse({
        firstname, lastname, email, password
    });

    /* guard clause */
    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")

    const response = await fetch(`${process.env.API_BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token?.value
        },

        body: JSON.stringify({
            firstname: validated.data.firstname,
            lastname: validated.data.lastname,
            email: validated.data.email,
            password: validated.data.password
        })
    });

    
    if (!response.ok) return {
        success: false,
        errors: ["Noget gik galt!"],
    };

    
    redirect("/")
}