import { useRouter } from 'next/router';

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Fetch and display product details based on the ID */}
    </div>
  );
};

export default ProductDetail;
