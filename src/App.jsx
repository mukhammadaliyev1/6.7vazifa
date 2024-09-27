// // import React, { useEffect, useState } from "react";

// // function App() {
// //   const [albums, setAlbums] = useState([]);
// //   const [loader, setLoader] = useState(false);

// //   useEffect(function () {
// //     setLoader(true);
// //     fetch("https://jsonplaceholder.typicode.com/albums", {
// //       method: "GET",
// //     })
// //       .then(function (response) {
// //         if (response.status == 200) {
// //           return response.json();
// //         }
// //       })
// //       .then((data) => {
// //         setAlbums(data);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       })
// //       .finally(function () {
// //         setLoader(false);
// //       });
// //   },[]);

// //   return (
// //     <div>
// //       {loader && <p>Loading....</p>}

// //       {albums.length > 0 &&
// //         albums.map(function (value, index) {
// //           return (
// //             <div>
// //               <h3>{value.id}</h3>
// //               <h3>{value.title}</h3>
// //             </div>
// //           );
// //         })}
// //     </div>
// //   );
// // }

// // export default App;
// import React ,{useState}from 'react'

// function App() {
//   const [card,setCard]=useState([])

// function handleClick(e){
//   e.preventDefault()

//   fetch("https://strapi-store-server.onrender.com/api/products" , {

//   })
//   .then(function(res){
//    if(res.status==200){
//     return res.json()
//    }
//   })
//   .then((data)=>{
//     setCard(data.data);

//   })

//   .catch(err=>{
//     console.log(err);

//   })
// }

//   return (

//     <div>

//       <div>
//       {
//         card.length>0 &&card.map(function(value,index){
//          return(
//         <div>
//           <img src={value.attributes.image} alt="" />
//           <h3>{value.id}</h3>
//           <h3>{value.title}</h3>
//         </div>
//          )
//         })
//       }

//       </div>

//       <button onClick={handleClick}>Malumot oliw</button>

//     </div>
//   )
// }

// export default App




import React from 'react';
import { Routes, Route , Link,} from 'react-router-dom';
import Galareya from './pages/Galareya';
import Comfystore from './pages/Comfystore';




function App() {
  return (








    <div>

<div className="navbar bg-base-100  p-4 flex flex-wrap  gap-10  " >
  <a className="btn btn-ghost text-xl mr-64 ml-24">Store</a>
 <button className="btn btn-smbtn btn-outline btn-accent"> <Link  to="./">Comfystore <br /></Link></button>



<button className='btn btn-outline btn-accent'><Link  to="./galareya">Galareya</Link></button>

</div>









      <Routes>
        <Route path='/' element={<Comfystore />} />       
        
         <Route path='/galareya' element={<Galareya />} />


      </Routes>
    </div>
  );
}

export default App;
