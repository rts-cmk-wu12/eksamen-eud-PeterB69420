import Image from "next/image";
import Link from "next/link";
import "../../../style/components/listingcard.scss";

export default function ListingCard({ listing }) {
    return (
        <Link href={`/listings/${listing.id}`}>
            <article className="listing-card">
                <Image className="listing-card__image" src={listing.asset.url} alt={`${listing.title}`} width={230} height={247} style={{ objectFit: "cover", marginBottom: "0.5rem" }} />
                <p className="listing-card__title">{listing.title}</p>
            </article>
        </Link>
    )
}