import { IoSearch } from "react-icons/io5";

export default function Search() {
    return (
        <div className="frontpage__search">
            <input type="search"
                className="frontpage__search-input"
                placeholder="Search"

            />
            <IoSearch className="frontpage__search-icon" />
        </div>
    )
}