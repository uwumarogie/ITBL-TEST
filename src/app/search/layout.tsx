"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function SearchLayout({children}) {

    const [query, setQuery] = useState("")
    const router = useRouter()

    async function onSearch() {
        router.push("/search/results?term=" + query)
    }


    return <div>
        <span className="text-3xl ">Search</span>
        <div className="">
            <input type="text"
                   value={query}
                   onChange={event => setQuery(event.target.value)}
                   className="bg-slate-600"/>
            <button className="mx-4 px-4 py-2 hover:shadow-lg rounded bg-slate-600" onClick={onSearch}>Search</button>
        </div>
        <div>
            {children}
        </div>
    </div>
}