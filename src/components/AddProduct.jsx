import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/products", formData);
      console.log("Product added successfully");
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="m-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Add Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-xl rounded px-8 pt-6 pb-8 mb-4 shadow-2xl border-solid"
      >
        <div className="mb-4">
          <label className="block text-white text-xs mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-xs mb-2"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Product Description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-white text-xs mb-2" htmlFor="price">
            Price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Price"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-xs mb-2" htmlFor="image1">
            Image Link 1:
          </label>
          <input
            type="text"
            name="image1"
            id="image1"
            value={formData.image1}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image Link 1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-xs mb-2" htmlFor="image2">
            Image Link 2:
          </label>
          <input
            type="text"
            name="image2"
            id="image2"
            value={formData.image2}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image Link 2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-xs mb-2" htmlFor="image3">
            Image Link 3:
          </label>
          <input
            type="text"
            name="image3"
            id="image3"
            value={formData.image3}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image Link 3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-xs mb-2" htmlFor="image4">
            Image Link 4:
          </label>
          <input
            type="text"
            name="image4"
            id="image4"
            value={formData.image4}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image Link 4"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-xs mb-2" htmlFor="category">
            Category:
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select category</option>
            <option value="trousers">Trousers</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
            <option value="shirts">Shirts</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
