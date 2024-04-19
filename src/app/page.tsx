import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className='p-4 max-w-sm text-3xl text-gray-200'>
        <p>Welcome to our website!</p>
      </div>
    </div>
  );
}

export default Home;
