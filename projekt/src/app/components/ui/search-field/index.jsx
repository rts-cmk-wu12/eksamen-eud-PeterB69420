"use client";


import { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { searchContext } from "../../providers/search-provider";


export default function Search({ listings }) {
    const { setResults, setErrorMsg } = useContext(searchContext);

    useEffect(() => {
        setResults(listings)
        setErrorMsg("")
    }, [listings])

    function searchHandler(event) {
        setErrorMsg("");
        const { value } = event.target;

        if (value === "") {
            setResults(listings);
            return;
        }

        const filteredData = listings.filter(listing => listing.title.toLowerCase().includes(value));

        if (filteredData.length === 0) {
            setErrorMsg("Ingen resultater")
        }
        setResults(filteredData);
    }
    return (
        <div className="frontpage__search">
            <input
                type="search"
                className="frontpage__search-input"
                placeholder="Search"
                onChange={searchHandler}
            />
            <IoSearch className="frontpage__search-icon" />
        </div>
    )
}