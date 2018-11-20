import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";

class ModalDetailsUsers extends React.Component {
  render() {
    const {
      fullScreen,
      openModal,
      dataModal,
      onClose,
      onApprove,
      onRemove
    } = this.props;

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={openModal}
          onClose={onClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Usuário"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {dataModal && (
                <div>
                  <Typography>Nome: {dataModal.name}</Typography>
                  <Typography>Apelido: {dataModal.nickname}</Typography>
                  <Typography>Email: {dataModal.email}</Typography>
                  <Typography>Telefone:{dataModal.phones}</Typography>
                  <hr />
                  <Typography>Endereço:</Typography>
                  <Typography>
                    Rua {dataModal.street}, número: {dataModal.number},
                    complemento: {dataModal.complement}
                  </Typography>
                  <Typography>
                    Bairro: {dataModal.district} - CEP: {dataModal.postal_code}
                  </Typography>
                  <Typography>
                    Cidade: {dataModal.city} - Estado: {dataModal.state}
                  </Typography>
                </div>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {dataModal.status === "PENDING" && (
              <Button
                color="primary"
                onClick={() => onApprove(dataModal.user_id)}
              >
                Liberar
              </Button>
            )}
            {dataModal.status === "APPROVED" && (
              <Button
                color="secondary"
                onClick={() => onRemove(dataModal.user_id)}
              >
                Deletar
              </Button>
            )}
            <Button onClick={onClose} color="secondary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ModalDetailsUsers.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  openModal: PropTypes.bool,
  dataModal: PropTypes.object,
  onClose: PropTypes.func,
  onApprove: PropTypes.func,
  onRemove: PropTypes.func
};

export default withMobileDialog()(ModalDetailsUsers);
