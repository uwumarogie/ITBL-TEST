import { NextPage } from 'next';
import '../app/globals.css';



const About: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-4 max-w-sm bg-white rounded-xl shadow-md space-x-4">
        <div>
          <h1 className="text-xl font-medium text-black">About Page</h1>
          <p className="text-gray-500">ITBL</p>
        </div>
      </div>
    </div>
  );
}

export default About;
