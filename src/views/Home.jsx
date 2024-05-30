import React, { useState, useEffect } from "react";
import getActiveProducts from "../functions/getActiveProducts";
import ItemSection from "../components/ItemSection";
import { Layout } from "../components/";
import "../styles/home.css"; 

function Home() {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProductos(products);
      console.log("productosHome", products);
    }

    getProducts();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <ItemSection title="Lo más vendido" productos={productos} />
        
        </div>
    </Layout>
  );
}

export default Home;
