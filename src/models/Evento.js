class Evento {
  id = null;
  fecha = null;
  motivo = null;
  persona_ep = null;

  constructor(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }
}

export default Evento;
