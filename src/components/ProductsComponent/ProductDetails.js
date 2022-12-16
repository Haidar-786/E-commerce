import React, { useEffect, useRef, useState } from "react";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectedProduct } from "../../Actions/action";
import axios from "axios";
import { useParams } from "react-router-dom";


function ProductPage(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  let { id } = useParams();
  let productIndex = id ? id - 1 + 1 : 1;
  console.log("productindex",productIndex)
  const [ids, setIds] = useState({
    productId: productIndex,
  });
  const { productId } = ids;

  const fetchProductDetails = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(selectedProduct(response.data));
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
    setIsLoading(false);
  };
  useEffect(() => {
       fetchProductDetails();
    
  }, [productId]);
  const product = useSelector((state) => state.productReducer.products);
  // console.log(product);

  return (
    <>
     
        <div className="ProductPage">
          <div className="products-hero-design">
            <div className="ripple-design">
              <div className="ripple-circle very-small shade0"></div>
              <div className="ripple-circle small shade1"></div>
              <div className="ripple-circle medium shade2"></div>
              <div className="ripple-circle large shade3"></div>
            </div>
            <div className="products-nav">
              <p className="breadCrump">
                <span className="home-link">Home</span> / Product Details
              </p>
              <h3 className="title">Product Details</h3>
              <div className="previous-next-buttons">
                {productId > 1 ? (
                  <div
                    onClick={() => setIds({ ...ids, productId: productId - 1 })}
                    className="left-arrow"
                  >
                    <FontAwesomeIcon
                      icon={["fas", "chevron-left"]}
                      size="2x"
                      aria-hidden="true"
                    />
                  </div>
                ) : null}
                {productId < 20 ? (
                  <div
                    onClick={() => setIds({ ...ids, productId: productId + 1 })}
                    className="right-arrow"
                  >
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      size="2x"
                      aria-hidden="true"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="product-details-container">
            <div className="product-details-card">
              <div className="product-detail-left-container">
                <div className="product-details-name">
                  <p>{product.title}</p>
                </div>
                <div className="product-details-description">
                  <p>{product.description}</p>
                </div>
                <div className="product-image-thumbnails"></div>
              </div>
              <div className="product-detail-middle-container">
                <div className="product-image-gallery">
                  <img
                    src={product.image}
                    width="205"
                    height="151"
                    alt="product-gallery"
                  />
                </div>
                <div className="product-detail-price">
                  <span>${product.price}</span>
                </div>
              </div>
              <div className="product-detail-right-container">
                <span className="review-heading">Reviews:</span>
                <div className="product-detail-add-to-cart-btn">
                  <button onClick={() => addItemToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}

export default ProductPage;
