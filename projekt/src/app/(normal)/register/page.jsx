import CreateUserForm from "@/app/components/ui/forms/register-form";
import "../../style/components/registerform.scss";

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