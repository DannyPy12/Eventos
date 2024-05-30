import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

function ItemCard({ product, isLoading }) {
  return (
    <Link to={`/producto/${product.id}`} className={`card-link ${isLoading ? 'loading' : ''}`}>
      <div className="item-card">
        {isLoading ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            <img src={product.images[0]} alt={product.name} className="item-image" />
            <div className="item-details">
              <h3 className="item-name">{product.name}</h3>
              <div className="item-price">
                <p className="original-price">${(product.price.unit_amount * 1.5) / 100}</p>
                <span className="arrow"> →</span>
                <span className="current-price">${product.price.unit_amount / 100} {product.price.currency}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ItemCard;
