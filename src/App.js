import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AdminPanel from "./components/AdminPanel";
import ProductDetail from "./components/ProductDetail";
import AddProduct from "./components/AddProduct";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <nav className="bg-cyan-500 p-4">
        <ul className="flex justify-center">
          <li className="mx-8">
            <Link
              to="/"
              className="block py-2 px-3 text-gray-100 font-bold hover:text-gray-200"
            >
              Home
            </Link>
          </li>
          <li className="mx-8">
            <Link
              to="/admin"
              className="block py-2 px-3 text-gray-100 font-bold hover:text-gray-200"
            >
              Admin Panel
            </Link>
          </li>
        </ul>
      </nav>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
