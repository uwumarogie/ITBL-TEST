import Link from 'next/link';

const ProductDashboard: React.FC = () => {
  return (
    <div>
      <h1>Product Dashboard</h1>
      <ul>
        <li>
          <Link href="/products/1">
            Product 1
          </Link>
        </li>
        <li>
          <Link href="/products/2">
            Product 2
          </Link>
        </li>
        {/* Add more product links as needed */}
      </ul>
    </div>
  );
};

export default ProductDashboard;
