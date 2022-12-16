import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, decrementItem, incrementItem ,itemCost, deleteCart} from "../../Actions/action";
import { useNavigate } from "react-router-dom";



function Cart(props) {
  const navigate = useNavigate();
  const [cost, setCost] = useState(0)
  const cartData = useSelector((state)=>state.cartReducer.carts)

  const dispatch = useDispatch();

  const deleteItem = (id)=>{
    dispatch(removeFromCart(id))
  }
  const deleteAll =(item)=>{
    dispatch(deleteCart(item))
  }

  const totalCost = ()=>{
    let cost = 0;
    cartData.map((item)=>{
      cost = item.price * item.quantity + cost
    });
    setCost(cost); 
  }

  useEffect(()=>{
    totalCost();
  },[totalCost])
//   console.log(cost);

  const increase =(item)=>{
  dispatch(incrementItem(item));
  }
  const decrease = (item)=>{
    dispatch(decrementItem(item))
  }
  
 const proceedCheckout =(price)=>{
  dispatch(itemCost(price))
  navigate("/payment")
 }

  return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div> <br/>
      <div>
      {cartData.length === 0 ? (
        <div className="cart-header"><h3>Cart is Empty</h3></div>
      ) : (<>
      <div className="cart-list">
          {cartData.map((item, index) =>(
            <ul key={index} >
            <li  className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} width="170" height="98" alt="cart item" />
              </div>
              <div className="cart-item-name">
                <span>{item.title} </span>
              </div>
              <div className="cart-item-qty">
                {item.quantity > 1 ? (
                  <span onClick={() => decrease(item)}>
                    <FontAwesomeIcon icon={["fas", "minus"]} />
                  </span>
                ) : (
                  <span onClick={()=>deleteItem(item.id)} className="cart-delete-item">
                    <FontAwesomeIcon icon={["far", "trash-alt"]} />
                  </span>
                )}
                <p >{item.quantity}</p>
                <span onClick={() => increase(item)}>
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
              </div>
              <div className="cart-item-price">${item.price * item.quantity}</div>
            </li>
            </ul>
          ))}
      </div>
      <div className="cart-checkout">
        <div className="cart-total">
          <h4>Total: ${cost} </h4>
          <span></span>
        </div>
        <div className="cart-shipping">
          <h4>Shipping: </h4>
          <span>Free Shipping</span>
        </div>
        <div className="cart-checkout-button">
        <button onClick={()=>proceedCheckout(cost)}>Proceed to Checkout</button>&nbsp;
        <button className="clearcart" onClick={()=>deleteAll(cartData)}>Clear Cart</button>
        </div>
      </div>
      </>    
 )}
 </div>
    </div>
  );
}

export default Cart;
