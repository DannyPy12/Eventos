import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, createCheckoutSession } from "../functions";
import { useCarritoContext } from "../contexts/carritoContext";
import { useUserContext } from "../contexts/userContext";
import { Layout } from "../components/";
import ItemCard from "../components/ItemCard"; // Importamos ItemCard
import "../styles/producto.css"; // Importar el archivo CSS

function Producto() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar el mensaje
  const { carrito, setCarrito } = useCarritoContext();
  const { user } = useUserContext();

  useEffect(() => {
    async function getProductInfo() {
      const product = await getProductById(id);
      console.log("producto", product);
      if (!product) {
        window.location = "/notfound";
      }
      setProductInfo(product);
    }
    getProductInfo();
  }, [id]);

  function addToCart() {
    setCarrito([...carrito, productInfo]);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div id="producto-izquierda" className="w-full lg:w-1/2 p-10">
            <img
              src={productInfo?.images[0]}
              alt={productInfo?.name}
              className="product-image"
            />
          </div>
          <div
            id="producto-derecha"
            className="w-full lg:w-1/2 h-full flex flex-col items-center justify-evenly p-4 lg:p-10"
          >
            <div className="info-container">
              <h1 className="product-name">{productInfo?.name}</h1>
              <p className="product-description">{productInfo?.description}</p>
              {productInfo && (
                <p className="product-price">
                  Precio: ${productInfo.price.unit_amount / 100}{" "}
                  {productInfo.price.currency}
                </p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full justify-evenly">
              <button onClick={addToCart} className="button-add-to-cart mb-4 lg:mb-0">
                AÑADIR A CARRITO
              </button>
              <button
                id="buy-button-producto"
                onClick={() => {
                  addToCart();
                  createCheckoutSession(user.uid, [{ ...productInfo }]);
                  const btn = document.getElementById("buy-button-producto");
                  btn.disabled = true;
                  btn.classList.add("bg-blue-500");
                  btn.classList.add("hover:bg-blue-700");
                  btn.classList.add("text-white");
                  btn.classList.add("px-5");
                  btn.classList.add("py-3");
                  btn.innerText = "Comprando...";
                }}
                className="button-buy-now"
              >
                COMPRAR AHORA
              </button>
            </div>
            {showMessage && (
              <p className="added-to-cart-message">¡Producto añadido al carrito!</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Producto;
