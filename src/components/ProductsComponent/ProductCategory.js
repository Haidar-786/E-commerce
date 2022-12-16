// import axios from 'axios';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { categories } from '../../Actions/action';
// import { Link } from 'react-router-dom';


// function ProductCategory(){
//   const dispatch = useDispatch();
//   // const history = useHistory
//   const mensProducts = async()=>{
//     await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
//      .then((res)=>{
//       // console.log(res.data);
//       if (res.status===200) {
//         // history.push('/categories')
//         dispatch(categories(res.data))
//       }
//      })
//       .catch((err)=>console.log("Error", err)) 
//     }
//     const womenProducts = async()=>{
//       await axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
//        .then((res)=>{
//         if (res.status===200) {
//           dispatch(categories(res.data))
//         }
//        })
//         .catch((err)=>console.log("Error", err)) 
//       }
//   const jewelerys = async()=>{
//     await axios.get('https://fakestoreapi.com/products/category/jewelery')
//      .then((res)=>{

//       if (res.status===200) {
//         dispatch(categories(res.data))
//       }
//      })
//       .catch((err)=>console.log("Error", err)) 
//     }
//     const electronics = async()=>{
//       await axios.get('https://fakestoreapi.com/products/category/electronics')
//        .then((res)=>{
//         if (res.status===200) {
//           dispatch(categories(res.data))
//         }
//        })
//         .catch((err)=>console.log("Error", err)) 
//       }
// return(
//   <div className="result-sorting">
//   <div className='buttonsPC'>  
//   <Link to={'/categories'} onClick={mensProducts}>Mens</Link>
//   <Link to={'/categories'} onClick={womenProducts}>Womens</Link>
//   <Link to={'/categories'} onClick={jewelerys}>Jewelery</Link>
//   <Link to={'/categories'} onClick={electronics}>Electronics</Link>
//   {/* <button className='buttonsP' onClick={mensProducts}>Mens</button> */}
// </div>
// </div>

// );
// }

// export default ProductCategory;