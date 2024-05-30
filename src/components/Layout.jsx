import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useCarritoContext } from "../contexts/carritoContext";
import "../styles/home.css";

function Layout({ children }) {
  const { carrito } = useCarritoContext();
  

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative">
      <header className="w-full bg-orange-500 text-white">
        <nav className="container mx-auto flex items-center justify-between py-4 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <Link to="/" className="font-bold italic text-3xl">
            JBLShop
          </Link>
          <div className="flex items-center">

            <Link
              to="/carrito"
              className="relative ml-4 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-md hover:bg-orange-600"
            >
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {carrito.length}
              </span>
              <AiOutlineShoppingCart className="text-2xl" />
            </Link>
            <Link
              to="/perfil"
              className="ml-4 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-md hover:bg-orange-600"
            >
              <AiOutlineUser className="text-2xl" />
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow overflow-y-auto bg-orange-100">{children}</main>
      <footer className="w-full bg-orange-500 text-white py-4">
        <div className="container mx-auto text-center">
          <span className="font-bold text-lg">
            La mejor tienda para comprar tus productos
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
