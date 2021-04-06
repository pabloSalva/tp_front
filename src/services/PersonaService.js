import Environment from "../enviroment";

import Persona from "../models/Persona";

export const PersonaService = {
  listar: () => {
    console.log("GET /api/personas");
    return new Promise((resolve, reject) => {
      return fetch(`${Environment.api}api/personas/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data = data.map((item) => new Persona(item));
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getPersonaID: (idPersona) => {
    let endpoint = `${Environment.api}api/personas/${idPersona}/`;
    console.log(`GET ${endpoint}`);
    return new Promise((resolve, reject) => {
      let responseOk = false;
      return fetch(`${endpoint}`)
        .then((response) => {
          responseOk = response.ok;
          return response.json();
        })
        .then((data) => {
          data = new Persona(data);
          resolve({ data: data, responseOk: responseOk });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  guardar: (persona) => {
    console.log("post /api/personas");
    return new Promise((resolve, reject) => {
      return fetch(`${Environment.api}api/personas/`, {
        method: "POST",
        body: JSON.stringify(persona),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },
  actualizar: (idPersona, persona) => {
    let endpoint = `${Environment.api}api/personas/${idPersona}/`;
    console.log(`PUT ${endpoint}`);
    return new Promise((resolve, reject) => {
      let responseOk = false;
      return fetch(endpoint, {
        method: "PUT",
        body: JSON.stringify(persona),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          responseOk = response.ok;
          return response.json();
        })
        .then((data) => {
          data = new Persona(data);
          resolve({ data: data, responseOk: responseOk });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  eliminar: (idPersona) => {
    let endpoint = `${Environment.api}api/personas/${idPersona}/`;
    console.log(`DELETE ${endpoint}`);
    return new Promise((resolve, reject) => {
      return fetch(`${endpoint}`, { method: "DELETE" })
        .then((response) => response.text())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
