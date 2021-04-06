class Persona {
  id = null;
  nombre = null;
  apellido = null;
  sexo = null;
  telefono = null;

  constructor(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }
}

export default Persona;
