class PersonaEP {
  id = null;
  nombre = null;
  apellido = null;
  sexo = null;
  telefono = null;
  escolaridad_completa = null;
  fecha_nacimiento = null;
  maxima_escolaridad_alcanzada = null;
  tiene_acompaniante = null;
  tiene_cuidador = null;
  vive_solo = null;
  referente = null;

  constructor(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }
}

export default PersonaEP;
