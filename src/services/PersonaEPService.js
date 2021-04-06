import Environment from "../environment";

import PersonaEP from "../models/PersonaEP";

export const PersonaEPService = {
  listar: () => {
    console.log("GET /PersonaEP");
    return new Promise((resolve, reject) => {
      return fetch(`${Environment.api}PersonaEP/`)
        .then((response) => response.json())
        .then((data) => {
          data = data["results"].map((item) => new PersonaEP(item));
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  guardar: (personaep) => {
    console.log("post /PersonaEP");
    return new Promise((resolve, reject) => {
      return fetch(`${Environment.api}PersonaEP/`, {
        method: "POST",
        body: JSON.stringify(personaep),
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
