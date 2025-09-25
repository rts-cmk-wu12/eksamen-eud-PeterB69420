import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token");

    if(token) return NextResponse.redirect(new URL ("/", request.url));
}

export const config = {
    matcher: ["/login", "/register"]
}