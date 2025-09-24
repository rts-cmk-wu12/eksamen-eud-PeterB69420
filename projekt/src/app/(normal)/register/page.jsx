import CreateUserForm from "@/app/components/ui/register-form";

export const metadata = {
    title: "Register",
}

export default function RegisterPage() {
    return (
        <section className="register-section">
        <CreateUserForm />
        </section>
    )
}