import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  TextField,
  Button,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { PersonaService } from "../../services/PersonaService";
import "../../App.css";

let initialPersona = {
  id: "",
  nombre: "",
  apellido: "",
  sexo: "",
  telefono: "",
};

const EditarPersonaView = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState(initialPersona);
  const [openAlertPersona, setOpenAlertPersona] = useState(false);
  const [openAlertError, setOpenAlertError] = useState(false);
  const [dirty, setDirty] = useState(false);

  const sexo = ["M", "F", "O"];
  const handleCloseAlertPersona = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlertPersona(false);
  };
  const handleCloseAlertError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlertError(false);
  };
  useState(() => {
    PersonaService.getPersonaID(id)
      .then((data) => {
        if (data["responseOk"]) {
          console.log(data["data"]);
          setPersona(data["data"]);
          initialPersona = data["data"];
        } else {
          setPersona(data["responseOk"]);
          initialPersona = data["responseOk"];
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <Snackbar
        open={openAlertPersona}
        autoHideDuration={6000}
        onClose={() => handleCloseAlertPersona()}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="topcenter"
      >
        <Alert onClose={() => handleCloseAlertPersona()} severity="success">
          {`Persona ${persona.nombre} editado exitosamente!`}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openAlertError}
        autoHideDuration={6000}
        onClose={handleCloseAlertError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="editError"
      >
        <Alert onClose={handleCloseAlertError} severity="error">
          {`Error al editar persona. Ya existe un persona con ese ID.`}
        </Alert>
      </Snackbar>
      <div className="form">
        <TextField
          name="nombre"
          label={persona.nombre}
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
          <Link to={`/personas/`}>Cancelar</Link>;
          <Button
            disabled={!dirty}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Editar
          </Button>
        </div>
      </div>
    </div>
  );

  function handleSubmit() {
    console.log(persona.id);
    PersonaService.actualizar(id, persona)
      .then((data) => {
        if (data["responseOk"]) {
          console.log(
            `Persona ${data.nombre} actualizada. Persona ID = ${data.id}`
          );
          setDirty(false);
          setOpenAlertPersona(true);
        } else {
          setOpenAlertError(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(e) {
    setPersona({
      ...persona,
      [e.target.name]: e.target.value,
    });
    setDirty(true);
  }
};

export default EditarPersonaView;
