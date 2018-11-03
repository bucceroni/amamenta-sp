import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  card: {
    backgroundColor: "#3F51B5"
  },
  text: {
    color: "#ffffff"
  }
};

const CardEvents = props => {
  const { value } = props;
  return (
    <Card>
      <CardHeader
        title={value.title}
        subheader={value.description}
        key={value.id}
      />
      <CardContent style={styles.card}>
        <Typography style={styles.text}>Link: {value.name}</Typography>
        <Typography style={styles.text}>
          Início: {value.date_initial}
        </Typography>
        <Typography style={styles.text}>Fim: {value.date_end}</Typography>
        <Typography style={styles.text}>Instituição: {value.name}</Typography>
        <Typography style={styles.text}>{value.type}</Typography>
        <Typography style={styles.text}>Site: {value.site}</Typography>
        <Typography style={styles.text}>Email: {value.email}</Typography>
        <Typography style={styles.text}>
          {/* Telefone: {value.phone[0]} */}
        </Typography>
        <hr />
        <Typography style={styles.text}>Endereço:</Typography>
        <Typography style={styles.text}>
          Rua {value.street}, número: {value.number}, complemento:{" "}
          {value.complement}
        </Typography>
        <Typography style={styles.text}>
          Bairro: {value.district} - CEP: {value.postal_code}
        </Typography>
        <Typography style={styles.text}>
          Cidade: {value.city} - Estado: N/A
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardEvents;
