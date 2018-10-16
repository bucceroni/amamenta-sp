import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  card: {
    maxWidth: 400,
    backgroundColor: "#fff4da"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});
class Infos extends Component {
  state = {
    expandedOne: false,
    expandedTwo: false,
    expandedThree: false,
    expandedFour: false,
    expandedFive: false
  };

  handleExpandClickOne = () => {
    this.setState(state => ({ expandedOne: !state.expandedOne }));
  };

  handleExpandClickTwo = () => {
    this.setState(state => ({ expandedTwo: !state.expandedTwo }));
  };
  handleExpandClickThree = () => {
    this.setState(state => ({ expandedThree: !state.expandedThree }));
  };
  handleExpandClickFour = () => {
    this.setState(state => ({ expandedFour: !state.expandedFour }));
  };
  handleExpandClickFive = () => {
    this.setState(state => ({ expandedFive: !state.expandedFive }));
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <Grid container justify="center" spacing={16}>
            <Grid item>
              <Card className={classes.card}>
                <CardHeader title="Quem pode ser doadora de leite humano?" />
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expandedOne
                    })}
                    onClick={this.handleExpandClickOne}
                    aria-expanded={this.state.expandedOne}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse
                  in={this.state.expandedOne}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>
                      Algumas mulheres quando estão amamentando produzem um
                      volume de leite além da necessidade do bebê, o que
                      possibilita que sejam doadoras de um Banco de Leite
                      Humano.De acordo com a legislação que regulamenta o
                      funcionamento dos Bancos de Leite no Brasil (RDC Nº 171) a
                      doadora, além de apresentar excesso de leite, deve ser
                      saudável, não usar medicamentos que impeçam a doação e se
                      dispor a ordenhar e a doar o excedente.
                    </Typography>
                    <Typography variant="caption">
                      Fonte:{" "}
                      <a href="http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360">
                        http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360
                      </a>
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardHeader title="Como preparar o frasco para coletar o leite humano?" />
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expandedTwo
                    })}
                    onClick={this.handleExpandClickTwo}
                    aria-expanded={this.state.expandedTwo}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse
                  in={this.state.expandedTwo}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>
                      <li>
                        Escolha um frasco de vidro com tampa plástica, pode ser
                        de café solúvel ou maionese;
                      </li>
                      <li>
                        Retire o rótulo e o papelão que fica sob a tampa e lave
                        com água e sabão, enxaguando bem;
                      </li>
                      <li>
                        Em seguida coloque em uma panela o vidro e a tampa e
                        cubra com água, deixando ferver por 15 minutos (conte o
                        tempo a partir do início da fervura);
                      </li>
                      <li>
                        Escorra a água da panela e coloque o frasco e a tampa
                        para secar de boca para baixo em um pano limpo;
                      </li>
                      <li>
                        Deixe escorrer a água do frasco e da tampa. Não enxugue;
                      </li>
                      <li>Você poderá usar quando estiver seco.</li>
                    </Typography>
                    <Typography variant="caption">
                      Fonte:{" "}
                      <a href="http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360">
                        http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360
                      </a>
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            <Grid item>
              <Card className={classes.card}>
                <CardHeader title="Como se preparar para retirar o leite humano (ordenhar)?" />
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expandedThree
                    })}
                    onClick={this.handleExpandClickThree}
                    aria-expanded={this.state.expandedThree}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse
                  in={this.state.expandedThree}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>
                      <p>
                        O leite deve ser retirado depois que o bebê mamar ou
                        quando as mamas estiverem muito cheias.
                      </p>
                      <p>
                        Ao retirar o leite é importante que você siga algumas
                        recomendações que fazem parte da garantia de qualidade
                        do leite humano distribuído aos bebês hospitalizados:
                      </p>
                      <li>
                        Escolha um lugar limpo, tranquilo e longe de animais;
                      </li>
                      <li>Prenda e cubra os cabelos com uma touca ou lenço;</li>
                      <li>
                        Evite conversar durante a retirada do leite ou utilize
                        uma máscara ou fralda cobrindo o nariz e a boca;
                      </li>
                      <li>
                        Lave as mãos e antebraços com água e sabão e seque em
                        uma toalha limpa.
                      </li>
                    </Typography>
                    <Typography variant="caption">
                      Fonte:{" "}
                      <a href="http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360">
                        http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360
                      </a>
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            <Grid item>
              <Card className={classes.card}>
                <CardHeader title="Como retirar o leite humano (ordenhar)?" />
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expandedFour
                    })}
                    onClick={this.handleExpandClickFour}
                    aria-expanded={this.state.expandedFour}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse
                  in={this.state.expandedFour}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>
                      <p>Comece fazendo massagem suave e circular nas mamas.</p>
                      <p>
                        Massageie as mamas com as polpas dos dedos começando na
                        aréola (parte escura da mama) e, de forma circular,
                        abrangendo toda mama.
                      </p>
                      <p>
                        O leite pode ser retirado de forma manual ou com a
                        utilização de equipamentos(Bomba/ Extrator).
                      </p>
                      <p>Manual:</p>
                      <li>
                        Primeiro coloque os dedos polegar e indicador no local
                        onde começa a aréola (parte escura da mama);
                      </li>
                      <li>
                        Firme os dedos e empurre para trás em direção ao corpo;
                      </li>
                      <li>
                        Comprima suavemente um dedo contra o outro, repetindo
                        esse movimento várias vezes até o leite começar a sair;
                      </li>
                      <li>
                        Despreze os primeiros jatos ou gotas e inicie a coleta
                        no frasco.
                      </li>
                    </Typography>
                    <Typography variant="caption">
                      Fonte:{" "}
                      <a href="http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360">
                        http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360
                      </a>
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            <Grid item>
              <Card className={classes.card}>
                <CardHeader title="Como guardar o leite retirado para doação?" />
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expandedFive
                    })}
                    onClick={this.handleExpandClickFive}
                    aria-expanded={this.state.expandedFive}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse
                  in={this.state.expandedFive}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>
                      <p>
                        O frasco com o leite retirado deve ser armazenado no
                        congelador ou freezer. Na próxima vez que for retirar o
                        leite, utilize outro recipiente esterilizado e ao
                        terminar acrescente este leite no frasco que está no
                        freezer ou congelador.
                      </p>
                      <p>
                        O leite pode ficar armazenado congelado por até 15 dias.
                      </p>
                      <p>
                        O leite humano doado, após passar por processo que
                        envolve seleção, classificação e pasteurização, é
                        distribuído com qualidade certificada aos bebês
                        internados em unidades neonatais.
                      </p>
                    </Typography>
                    <Typography variant="caption">
                      Fonte:{" "}
                      <a href="http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360">
                        http://www.redeblh.fiocruz.br/cgi/cgilua.exe/sys/start.htm?sid=360
                      </a>
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

Infos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Infos);
