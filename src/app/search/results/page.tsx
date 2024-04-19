"use client"

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";


export default function ResultsPage() {
    const query = useSearchParams<{term: string}>()
    const [result, setResult] = useState(null)
    useEffect(() => {
        fetch("https://api.duckduckgo.com/?q=" + query.get("term") + "&format=json&atb=v380-1")
            .then(res => res.json())
            .then(res => {
                setResult(res)
            })
    }, [query.get("term")])
    return <div>
        <div>
            Result for "{query.get("term")}"
        </div>
        <div className="mb-12">
            <span className="text-sm opacity-60">Results from api.duckduckgo.com</span>
        </div>
        <div>
            {result?.Image && <img src={"https://duckduckgo.com" + result?.Image} className="h-32 mb-4"/>}
            <h1 className="text-4xl mb-4">{result?.Heading}</h1>
            <span>{result?.AbstractText}</span>
            <p className="text-sm opacity-60">From <a href={result?.AbstractURL}>{result?.AbstractSource}</a></p>
        </div>
    </div>
}