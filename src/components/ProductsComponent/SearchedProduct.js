import React from 'react';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function SearchedProduct(props){
  const products = useSelector((state)=> state.productReducer.product)
  // console.log(products);
  let query = useQuery();
  let searchKeyword=query.get("keyword");
  return(
<div className="searched-product-list">
<h2>{searchKeyword}</h2>
<div className="related-products-card">
{products.map((product, i) => (
  <div key={i}>
            <ProductCard product={product} />
            </div>
          ))}
</div>
</div>
  );
}

export default SearchedProduct;