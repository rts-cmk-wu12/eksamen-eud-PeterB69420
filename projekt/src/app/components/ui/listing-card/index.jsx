import Image from "next/image";
import Link from "next/link";

export default function ListingCard({ listing }) {
    return (
        <Link href={`/listings/${listing.id}`}>
            <article className="listing-card">
                <Image src={listing.asset.url} alt={`${listing.title}`} width={230} height={247} />
                <p className="listing-card__title">{listing.title}</p>
            </article>
        </Link>
    )
}