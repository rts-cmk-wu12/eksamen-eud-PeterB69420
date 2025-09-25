import LoginForm from "@/app/components/ui/forms/login-form";
import "../../style/components/loginform.scss";


export const metadata = {
    title: "Login",
}


export default function LoginPage() {
    return (
        <>
        <section className="login-section">
        <LoginForm />
        </section>
        </>
    )
}