import React, { useEffect, useState } from "react";
import ImageWithFallback from "./loadedImg";

function Galareya() {
  const [album, setAlbum] = useState([]);
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET",
    })
      .then(function (res) {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        setAlbum(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="cont flex flex-wrap gap-10 pt-12 justify-center">
      {album.length > 0 &&
        album.map(function (value, index) {
          return (
            <div className="card p-5 shadow-xl rounded-lg  hover:shadow-2xl transition  text-center w-96">






           











              <ImageWithFallback
  src={value.url}
  fallbackSrc="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?size=626&ext=jpg"
  alt="Tasvir"
/>



              <h1 className="text-black text-center bold mt-2">


                {value.title}
              </h1>
            </div>
          );
        })}
    </div>
  );
}

export default Galareya;
