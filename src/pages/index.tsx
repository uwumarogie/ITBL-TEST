import { NextPage } from 'next';
import '../app/globals.css';

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className='p-4 max-w-sm bg-white rounded-xl shadow-md space-x-4 font-medium text-gray-700'>
        <p>Welcome to our website!</p>
      </div>
    </div>
  );
}

export default Home;
