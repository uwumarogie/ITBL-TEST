import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link href="/" className="hover:text-gray-300 px-3 py-2 rounded-md">
            Home
          </Link>
        </div>
        <div className="flex">
          <Link href="/about" className="hover:text-gray-300 px-3 py-2 rounded-md">
            About
          </Link>
          <Link href="/search" className="hover:text-gray-300 px-3 py-2 rounded-md">
            Search
          </Link>
          <Link href="/contact" className="hover:text-gray-300 px-3 py-2 rounded-md">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
