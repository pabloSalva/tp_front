import React, { useState } from "react";

import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { PersonaService } from "../../services/PersonaService";
import "../../App.css";
import { Link } from "react-router-dom";

const initialPersona = {
  nombre: "",
  apellido: "",
  sexo: "",
  telefono: 0,
};
const CrearPersonaView = (props) => {
  const [persona, setPersona] = useState(initialPersona);
  const [dirty, setDirty] = useState(false);

  const sexo = ["M", "F", "O"];

  return (
    <div className="form">
      <TextField
        name="nombre"
        label="Nombre"
        value={persona.nombre}
        onChange={handleChange}
      />
      <TextField
        name="apellido"
        label="Apellido"
        value={persona.apellido}
        onChange={handleChange}
      />
      <InputLabel id="inputSelect">Sexo</InputLabel>
      <Select
        labelId="inputSelect"
        name="sexo"
        label="Sexo"
        value={persona.sexo}
        onChange={handleChange}
      >
        <MenuItem>
          <em>None</em>
        </MenuItem>

        {sexo.map((persona) => (
          <MenuItem value={persona}>{persona}</MenuItem>
        ))}
      </Select>
      <TextField
        type={Number}
        name="telefono"
        label="Telefono"
        value={persona.telefono}
        onChange={handleChange}
      />
      <div>
        <Button
          disabled={!dirty}
          onClick={() => {
            setPersona(initialPersona);
            setDirty(false);
          }}
        >
          Cancelar
        </Button>
        <Button
          disabled={!dirty}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Guardar
        </Button>
      </div>
      <div>
        <Link to={`/personas/`}>Volver</Link>;
      </div>
    </div>
  );

  function handleChange(event) {
    setPersona({
      ...persona,
      [event.target.name]: event.target.value,
    });
    setDirty(true);
  }

  function handleSubmit() {
    PersonaService.guardar(persona);
    console.log(persona);
  }
};

export default CrearPersonaView;
