import React, { useState, useEffect } from "react";

import { PersonaService } from "../../services/PersonaService";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteDialog from "../ConfirmDialog";
import Persona from "../../models/Persona";

const ListarPersonaView = (props) => {
  const [personas, setPersonas] = useState([]);

  const [openModal, setOpenModal] = React.useState(false);
  const [personaToDelete, setPersonaToDelete] = useState(new Persona());
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    PersonaService.listar()
      .then((data) => {
        setPersonas(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const eliminarPersona = (idPersona) => {
    PersonaService.eliminar(idPersona)
      .then((statusCode) => {
        console.log(`Persona ${personaToDelete.id} eliminado!`);
      })
      .catch((error) => {
        console.log(error);
      });
    setDeleted(!deleted); // cambio el valor para entrar al useEffect y actualizar el listado de personas
  };

  const handleEliminarPersona = (idPersona) => {
    eliminarPersona(idPersona);
  };

  const handleModalClickOpen = (persona) => {
    setPersonaToDelete(persona);
    setOpenModal(true);
  };

  const handleModalClose = (value) => {
    setOpenModal(false);
    value && handleEliminarPersona(personaToDelete.id);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table responsive>
          <TableHead>
            <TableRow>
              <TableCell align="right">NOMBRE</TableCell>
              <TableCell align="right">APELLIDO</TableCell>
              <TableCell align="right">SEXO</TableCell>
              <TableCell align="right">TELEFONO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personas.map((persona) => {
              return (
                <TableRow key={persona.id}>
                  <TableCell align="right">
                    <Link to={`/editar_personas/${persona.id}`}>
                      {persona.nombre}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{persona.apellido}</TableCell>
                  <TableCell align="right">{persona.sexo}</TableCell>
                  <TableCell align="right">{persona.telefono}</TableCell>
                  <td>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleModalClickOpen(persona)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </TableRow>
              );
            })}
            {personas.length === 0 && (
              <p className="messages">No existen personas</p>
            )}
          </TableBody>
        </Table>
        <DeleteDialog
          title="Eliminar Persona"
          text={`Estás seguro que quieres eliminar la persona ${personaToDelete.nombre}?`}
          confirmDelete={false}
          open={openModal}
          onClose={handleModalClose}
          idItem={personaToDelete.id}
        />
      </TableContainer>
      <Link to={`/crear_personas`}>Crear Persona</Link>
    </div>
  );
};

export default ListarPersonaView;
