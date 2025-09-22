import ListingCard from "../components/ui/listing-card"
import Search from "../components/ui/search";
import "../style/pages/frontpage.scss";

export const metadata = {
    title: "Frontpage",
}

export default async function FrontPage() {
    const response = await fetch(`${process.env.API_BASE_URL}/listings`)

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
            </section>
        </>
    )
}