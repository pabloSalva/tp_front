import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles({
  space: {
    fontFamily: "Roboto",
    paddingLeft: "8px",
    paddingRight: "10px",
  },
  bgTransparten: {
    backgroundColor: "transparent",
  },
});

function DeleteDialog(props) {
  const { onClose, confirmDelete, open, title, text } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose(confirmDelete);
  };

  const handleConfirmDelete = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      <div className={classes.modalDelete}>
        <p className={classes.space}>
          <span>{text}</span>
        </p>
        <Button color="secondary" onClick={() => handleConfirmDelete(true)}>
          Eliminar
        </Button>
        <Button color="primary" onClick={() => handleConfirmDelete(false)}>
          Cancelar
        </Button>
      </div>
    </Dialog>
  );
}

DeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  confirmDelete: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default DeleteDialog;
