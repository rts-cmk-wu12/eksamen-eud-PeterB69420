import NewsletterForm from "@/app/components/ui/forms/newsletter-form";
import "../../style/components/newsletter.scss";

export const metadata = {
    title: "Contact",
}

export default function ContactPage() {
    return (
        <section className="newsletter-section">
            <NewsletterForm />
        </section>
    )
}