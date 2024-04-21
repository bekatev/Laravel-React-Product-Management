import React from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

function Home() {
  return (
    <div>
      <div className="mx-auto px-4">
        <ProductList />
        <Link
          to="/admin"
          className="block text-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded my-8"
        >
          Go to Admin Panel
        </Link>
      </div>
    </div>
  );
}

export default Home;
