import Image from "next/image";
import "../../../style/pages/listingdetails.scss";
import { cookies } from "next/headers";




export default async function ListingDetailPage({ params }) {
    const { listingId } = await params;

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")

    const response = await fetch(`${process.env.API_BASE_URL}/listings/${listingId}`, {
        headers: {
            "Authorization": "Bearer" + token
        }
    })

    const listing = await response.json()



    return (
        <>
            <section className="listing-details">
                <div className="listing-details__item">
                    <div className="listing-details__image-box">
                        <Image className="listing-details__image-box-item" src={listing.asset.url} alt={`${listing.title}`} width={415} height={415} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="listing-details__info">
                        <h1 className="listing-details__info-title">{listing.title}</h1>
                        <p className="listing-details__info-desc">{listing.description}</p>
                        <p className="listing-details__info-date"><span>On SwapHub since: </span>{listing.createdAt}</p>
                        <button className="listing-details__info-button">Propose a swap</button>
                    </div>
                </div>
            </section>
            <section className="listing-more">
                <h2 className="listing-more__title">Other items from this Swapper</h2>
                <div className="listing-more__items">
                    
                </div>
            </section>
        </>
    )
}