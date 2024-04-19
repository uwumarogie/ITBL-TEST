'use client'

import { useSearchParams } from 'next/navigation';

const Results = () => {
  const params = useSearchParams();
  const term = params.get('term')
  const results = search(term);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-xl font-medium">Search Results</h1>
        <p className="text-gray-500">{results}</p>

      </div>
    </div>
  );
};

async function search(term: string | null) {
  if (term) {
    return "Results for " + term
  }

  return "No Results"
}

export default Results;
