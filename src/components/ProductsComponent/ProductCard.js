import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ProductCard({ product }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [1000]);
  });
  return (
    <>
    
        <div className="product-card" key={product.id}>
          <div className="product-header">
            <Link to={`/shop/${product.id}`}>
              <div className="product-maximize">
                <FontAwesomeIcon
                  icon={["fas", "expand-arrows-alt"]}
                  size="2x"
                />
              </div>
            </Link>
            <Link to="/cart">
              <span className="product-add-to-cart">
                <FontAwesomeIcon icon={["fas", "shopping-bag"]} />
              </span>
            </Link>
          </div>
          <div className="product-image">
            <figure>
              <img
                src={product.image}
                alt="product-img"
                width="220"
                height="200"
              />
            </figure>
          </div>
          <div className="product-price">${product.price}</div>
        </div>

    </>
  );
}

export default ProductCard;
