import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  const removeProduct = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://127.0.0.1:8000/api/products/${id}/delete`)
      .then((res) => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Product List
      </h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right shadow-2xl text-gray-500 dark:text-gray-400 sm:table hidden">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Image</div>
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Description</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Price</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Category</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  key={product.id}
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="w-20 h-auto mb-2 rounded-md"
                  />
                </th>

                <td className="px-6 py-4">
                  <span className="block text-base font-bold mb-1">
                    {product.name}
                  </span>
                </td>
                <td className="px-2 py-4">
                  <span className="block text-gray-300 mb-1 text-xs">
                    {product.description.length > 30
                      ? `${product.description.substring(0, 30)}...`
                      : product.description}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="block text-gray-300">${product.price}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="block text-gray-300">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/product/${product.id}`}
                    className="font-medium text-blue-600
                  dark:text-blue-500 hover:text-blue-200 m-2"
                  >
                    {" "}
                    More
                  </Link>
                  <button
                    onClick={(e) => removeProduct(e, product.id)}
                    className="font-medium text-red-600
                  dark:text-red-500 hover:text-red-200 m-2"
                  >
                    {" "}
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:hidden">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border dark:bg-gray-800 dark:border-gray-700 rounded-md shadow-md overflow-hidden"
            >
              <img
                src={product.image1}
                alt={product.name}
                className="w-full h-auto rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-base font-bold mb-1 text-white">
                  {product.name}
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  {product.description.length > 30
                    ? `${product.description.substring(0, 30)}...`
                    : product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">${product.price}</span>
                  <span className="text-gray-300">{product.category}</span>
                </div>
                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/product/${product.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:text-blue-200 mr-2"
                  >
                    More
                  </Link>
                  <button
                    onClick={(e) => removeProduct(e, product.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:text-red-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
