import { cookies } from "next/headers";
import ListingCard from "../components/ui/listing-card"
import Pagination from "../components/ui/pagination";
import Search from "../components/ui/search-field";
import "../style/pages/frontpage.scss";

export const metadata = {
    title: "Frontpage",
}

export default async function FrontPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")

    const response = await fetch(`${process.env.API_BASE_URL}/listings`, {
        headers: {
            "Authorization": "Bearer" + token
        }
    });

    const listings = await response.json()
    console.log(listings)

    return (
        <>
            <section className="frontpage">
                <Search />
                <div className="frontpage__listings">
                    {listings.map((listings) => (
                        <ListingCard key={listings.id} listing={listings} />
                    ))}
                </div>
                {/* <Pagination /> */}
            </section>
        </>
    )
}