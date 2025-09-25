"use server";

import { cookies } from "next/headers";
import z from "zod";
import { revalidatePath } from "next/cache";

export default async function NewsLetter(prevState, formData) {
    const email = formData.get("email");

    const schema = z.object({
        email: z.string().min(1, { message: "Email skal være udfyldt"})
    });

    const validated = schema.safeParse({
        email
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")

    const response = await fetch(`${process.env.API_BASE_URL}/newsletter`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token?.value
        },
        body: JSON.stringify({
            email: validated.data.email
        })
    });

    if(!response.ok) return {
        success: false,
        errors: ["Noget gik galt"]
    }
}