"use client"

import { useContext } from "react";
import { searchContext } from "../../providers/search-provider";
import ListingCard from "../listing-card"

function list(listing) {
    return <li key={listing.id}><ListingCard listing={listing} /></li>
}

export default function ListingList({ listings }) {
    const actualList = listings ? listings : useContext(searchContext);
    return (
        <>
        <p>{actualList.errorMsg}</p>
        <div className="frontpage__listings">
            {actualList.length ? listings.map(list)
					: actualList.results?.map(list)
				}
        </div>
        </>
    )
}