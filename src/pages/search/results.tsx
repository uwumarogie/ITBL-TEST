import { useRouter } from 'next/router';
import '../../app/globals.css';


const Results = () => {
  const router = useRouter();
  const { term } = router.query;

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-xl font-medium">Search Results</h1>
        <p className="text-gray-500">Results for: {term}</p>
      </div>
    </div>
  );
};

export default Results;
