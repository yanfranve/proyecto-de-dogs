import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

var cardetail = require("./dogsdetail.module.css");

export default function DogsDetail() {
  const [dogs, setDogs] = useState(null); // seteamos el estado en null
  let { id } = useParams();
  useEffect(() => {
    axios.get("http://localhost:3001/dogs/" + id).then((response) => {
      setDogs(response.data);
    });
  }, []);

  return (
    <div className={cardetail.div}>
      {
        //Se llamo al axios de manera local y por ello ya que tenemos en el estado a dogs, de ahi agarramos lo que ocupamos
        dogs ? (
          <div className={cardetail.container}>
            {/* <p className={cardetail.img}>{dogs[0].id}</p> */}
            <h3 className={cardetail.h3}>{dogs[0].name}</h3>
            <img
              src={dogs[0].image}
              alt="img"
              height="345"
              width="500"
              className={cardetail.img}
            />
            <div>
              <p className={cardetail.title}>Temperamento:</p>
              <p className={cardetail.descriptions}>{dogs[0].temperament}</p>
              <p className={cardetail.title}>Peso:</p>
              <p className={cardetail.descriptions}>{dogs[0].weight}</p>
              <p className={cardetail.title}>Altura</p>
              <p className={cardetail.descriptions}>{dogs[0].height}</p>
              <p className={cardetail.title}>Años de vida</p>
              <p className={cardetail.descriptions}>{dogs[0].years}</p>
            </div>
          </div>
        ) : (
          <div>Cargando...</div>
        )
      }
    </div>
  );
}
