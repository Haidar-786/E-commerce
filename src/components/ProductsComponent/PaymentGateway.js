import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

const PaymentGateway = () => {
    const price = useSelector((state)=>state.cartReducer.cost)

    const handleToken =async(token)=>{
        await axios.post('http://localhost:3000', 
        {token})
        .then((res)=>console.log(res))
        .catch((err)=>console.log("Error", err));
    }
    
  return (
    <div>
        <center>
           <h1>Total cost : ${price ? price : 0.00}</h1> <br/>
            <StripeCheckout
            stripeKey='pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3'
            token= {handleToken}
            amount={price*100}
            name = "Products"
            billingAddress
            shippingAddress
            />
        </center>
    </div>
  )
}

export default PaymentGateway;