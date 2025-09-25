import Search from "../components/ui/search-field";
import "../style/pages/frontpage.scss";
import ListingList from "../components/ui/listing-list";
import SearchProvider from "../components/providers/search-provider";

export const metadata = {
    title: "Frontpage",
}

export default async function FrontPage() {
    const response = await fetch(`${process.env.API_BASE_URL}/listings`);
    const listings = await response.json()
    

    return (
        <>
            <section className="frontpage">
                <SearchProvider>
                <Search listings={listings} />
                <ListingList />
                </SearchProvider>
            </section>
        </>
    )
}