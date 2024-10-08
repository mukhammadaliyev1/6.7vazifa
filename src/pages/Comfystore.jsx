import React, { useEffect, useState } from "react";

function Comfystore() {
  const [card, setCard] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(function () {
    setLoader(true);
    fetch("https://strapi-store-server.onrender.com/api/products", {
      method: "GET",
    })
      .then(function (res) {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        setCard(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(function () {
        setLoader(false);
      });
  }, []);

  return (
    <div className=" cont flex flex-wrap gap-10  justify-center   pt-32">
      {loader &&  <img className="w-8"   src="gifloaded.gif" alt="" /> }
     

      {card.length > 0 &&
        card.map(function (value, index) {
          return (
            <div className="card p-5 shadow-xl bg-white rounded-lg  hover:shadow-2xl transition duration-300 text-center">
              <img
                className=" img  w-72 rounded-md h-48"
                src={value.attributes.image}
                alt=""
              />
              <h1 className=" h3 text-center text-black ">
                {value.attributes.title}
              </h1>
              <p>{value.attributes.price} </p>
            </div>
          );
        })}
    </div>
  );
}

export default Comfystore;
