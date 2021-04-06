import Environment from "../environment";

import Evento from "../models/Evento";

export const EventoService = {
  listar: () => {
    console.log("GET /Evento");
    return new Promise((resolve, reject) => {
      return fetch(`${Environment.api}Evento/`)
        .then((response) => response.json())
        .then((data) => {
          data = data["results"].map((item) => new Evento(item));
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  guardar: (evento) => {
    console.log("post /Evento");
    return new Promise((resolve, reject) => {
      return fetch(`${Environment.api}Evento/`, {
        method: "POST",
        body: JSON.stringify(evento),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },
};
