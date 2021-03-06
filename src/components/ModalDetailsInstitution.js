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

class ModalDetailsInstitutions extends React.Component {
  render() {
    const {
      fullScreen,
      openModal,
      dataModal,
      onClose,
      user,
      registerUserInstitution,
      registerInstitutionUser,
      userInstitution
    } = this.props;
    return (
      <Dialog
        fullScreen={fullScreen}
        open={openModal}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Instituição"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dataModal && (
              <div>
                <Typography>{dataModal.name}</Typography>
                <Typography>{dataModal.type}</Typography>
                <Typography>{dataModal.id}</Typography>
                <Typography>Site: {dataModal.site}</Typography>
                <Typography>Telefone:{dataModal.phone}</Typography>
                <hr />
                <Typography>Endereço:</Typography>
                <Typography>
                  Rua {dataModal.street}, número: {dataModal.number},
                  complemento: {dataModal.complement}
                </Typography>
                <Typography>
                  Bairro: {dataModal.district} - CEP: {dataModal.postal_code}
                </Typography>
                <Typography>Cidade: {dataModal.city} - Estado: {dataModal.state}</Typography>
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Fechar
          </Button>
          {user &&
            (user.role === "user") &&
            !userInstitution.status && (
              <Button
                onClick={() =>
                  registerUserInstitution(
                    user.user_id,
                    dataModal.institution_id
                  )
                }
                color="primary"
              >
                Cadastrar
              </Button>
            )}
          {user &&
            (user.role === "institution") &&
            !userInstitution.status && (
              <Button
                onClick={() =>
                  registerInstitutionUser(
                    user.user_id,
                    dataModal.institution_id
                  )
                }
                color="primary"
              >
                Cadastrar
              </Button>
            )}
        </DialogActions>
      </Dialog>
    );
  }
}

ModalDetailsInstitutions.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  openModal: PropTypes.bool,
  dataModal: PropTypes.object,
  onClose: PropTypes.func,
  user: PropTypes.object,
  registerUserInstitution: PropTypes.func,
  registerInstitutionUser: PropTypes.func,
  userInstitution: PropTypes.object
};

export default withMobileDialog()(ModalDetailsInstitutions);
