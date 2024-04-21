import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/products/${id}`
        );
        setProduct(response.data.product); // Assuming the product data is nested under the 'product' key
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();

    // Clean up function to cancel pending requests (if needed)
    return () => {
      // Any cleanup code here...
    };
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-white">{product.name}</h2>
      <div className="flex items-center mb-4 text-white">
        <p className="text-lg font-semibold mr-2 text-white">Price:</p>
        <p className="text-lg text-white">${product.price}</p>
      </div>
      <p className="text-sm text-gray-500 mb-4 text-white">
        {product.description}
      </p>
      <p className="text-lg font-semibold mb-4 text-white">
        Category: {product.category}
      </p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {product.image1 && (
          <img src={product.image1} alt="Product 1" className="w-full h-auto" />
        )}
        {product.image2 && (
          <img src={product.image2} alt="Product 2" className="w-full h-auto" />
        )}
        {product.image3 && (
          <img src={product.image3} alt="Product 3" className="w-full h-auto" />
        )}
        {product.image4 && (
          <img src={product.image4} alt="Product 4" className="w-full h-auto" />
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
