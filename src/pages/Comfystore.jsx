import React, { useEffect, useState } from "react";

function Comfystore() {
  const [card, setCard] = useState([]);

  useEffect(function () {
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
      });
  }, []);

  return (
    <div className=" cont flex flex-wrap gap-10 pt-12 justify-center ">
      {card.length > 0 &&
        card.map(function (value, index) {
          return (
            <div className="card p-5 shadow-xl rounded-lg  hover:shadow-2xl transition duration-300 text-center">
              <img
                className=" img  w-72 rounded-md h-48"
                src={value.attributes.image}
                alt=""
              />
              <h1 className=" h3 text-center text-black ">{value.attributes.title}</h1>
              <p>{value.attributes.price} </p>
            </div>
          );
        })}
    </div>
  );
}

export default Comfystore;
