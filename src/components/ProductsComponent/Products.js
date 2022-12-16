import React, { useEffect, useState } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Actions/action";


function Product(props) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  
  useEffect(()=>{
    fetchProducts();
  })



  const fetchProducts = async()=>{
  await axios.get('https://fakestoreapi.com/products')
   .then((res)=>{
    if (res.status===200) {
      dispatch(getProducts(res.data));
      setProducts(res.data);
    }
   })
    .catch((err)=>console.log("Error", err)) 
  }
 
 
  return (
    <div className="products">
      <ProductsHeader />
      <div className="products-container">
        <div className="product-cards" dir="ltr">
          {products.map((product,index) => (
            <div key={index}>
            <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
