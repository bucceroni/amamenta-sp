import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

class Register extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <Avatar className={classes.avatar}>
          👶
        </Avatar>
        <Typography variant="headline">Cadastre-se</Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Nome completo</InputLabel>
            <Input id="name" name="name" autoComplete="name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="nickname">Apelido</InputLabel>
            <Input id="nickname" name="nickname" autoComplete="nickname" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="gender">Gênero</InputLabel>
            <Input id="gender" name="gender" autoComplete="gender" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="state">Estado</InputLabel>
            <Input id="state" name="state" autoComplete="state" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="city-id">Cidade</InputLabel>
            <Input id="city-id" name="city-id" autoComplete="city-id" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="street">Rua</InputLabel>
            <Input id="street" name="street" autoComplete="street" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="number">Número</InputLabel>
            <Input id="number" name="number" autoComplete="number" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="complement">Complemento</InputLabel>
            <Input id="complement" name="complement" autoComplete="complement" autoFocus />
          </FormControl>
  
          
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="district">Bairro</InputLabel>
            <Input id="district" name="district" autoComplete="district" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="postal-code">CEP</InputLabel>
            <Input id="postal-code" name="postal-code" autoComplete="postal-code" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Senha</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="raised"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
