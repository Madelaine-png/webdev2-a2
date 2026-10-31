/*
 * File: SearchBox.tsx
 * Author: Madelaine Smith
 * Date: October 30, 2026
 *
 * This component is the search box and handles changes to the search
 * then passes them up to student portal to be handled
 */

//search props
interface searchProps {
    onSearch: (
        newSearch: string,
    ) => void;
}

const SearchBox = ({onSearch}: searchProps) => {

    //Handle new search being entered
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    }

    return(
        <div id="students" className="mt-8 mb-2">
            <input
                    type="text"
                    onChange={handleSearchChange}
                    placeholder="Search the list"
                    className="flex-1 rounded-lg border bg-white border-slate-300 px-4 py-2
                    text-slate-900 focus:border-indigo-600
                    focus:outline-none"
                />
        </div>
    )
}

export default SearchBox;