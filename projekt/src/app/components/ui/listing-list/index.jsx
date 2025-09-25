"use client"

import { useContext, useState } from "react";
import { searchContext } from "../../providers/search-provider";
import ListingCard from "../listing-card"
import "../../../style/components/pagination.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function list(listing) {
    return <li key={listing.id}><ListingCard listing={listing} /></li>
}

// Pagination toturial fra YouTube

export default function ListingList({ listings }) {
    const [currentPage, setCurrentPage] = useState(1);
    const listingsPerPage = 4;

    const actualList = listings ? listings : useContext(searchContext);

    const allListings = actualList?.length ? actualList : actualList?.results || [];

    const lastIndex = currentPage * listingsPerPage;
    const firstIndex = lastIndex - listingsPerPage;
    const totalPages = Math.ceil(allListings.length / listingsPerPage);
    const numbers = [...Array(totalPages + 1).keys()].slice(1);

    function prevPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <>
            <p>{actualList.errorMsg}</p>
            <div className="frontpage__listings">
                {allListings.slice(firstIndex, lastIndex).map(list)}
            </div>
            <nav>
                <ul className="pagination">
                    <li className="pagination-item">
                        <button className="pagination-item__button"
                            onClick={prevPage}>
                            <FaArrowLeft /> Prev
                        </button>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`pagination-item ${currentPage === n ? "active" : ""}`} key={i}>
                                <button className="pagination-item__button"
                                    onClick={() => changePage(n)}>{n}</button>
                            </li>
                        ))
                    }
                    <li className="pagination-item">
                        <button className="pagination-item__button"
                            onClick={nextPage}>
                            Next <FaArrowRight />
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}