'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
    const [term, setTerm] = useState('')
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search/results?term=${encodeURIComponent(term)}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="p-4 max-w-sm bg-white rounded-xl shadow-md w-full mx-auto">
                <div className="flex items-center border-b border-gray-300 py-2 space-x-4">
                    <input
                        className="appearance-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search term..."
                        aria-label="Search term"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};


export default Search;
