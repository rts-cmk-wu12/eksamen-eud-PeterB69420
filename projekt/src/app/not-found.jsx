import Link from "next/link";
import "./style/error/error.scss";

export const metadata = {
    title: "Not Found",
}

export default function NotFound() {
    return (
        <section className="not-found">
        <div className="not-found__container">
            <h1 className="not-found__msg">404 - Page Not Found</h1>
            <Link href="/" className="not-found__link">Return to frontpage</Link>
        </div>
        </section>
    )
}