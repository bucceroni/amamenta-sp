import React from "react";

const CardLocalize = (value) => {
  <Card>
    <CardHeader title={value.name} subheader={value.type} key={value.id} />
    <CardContent className={classes.card}>
      <Typography className={classes.text}>Site: {value.site}</Typography>
      <Typography className={classes.text}>
        Telefone: {value.phone[0]}
      </Typography>
      <hr />
      <Typography className={classes.text}>Endereço:</Typography>
      <Typography className={classes.text}>
        Rua {value.street}, número: {value.number}, complemento:{" "}
        {value.complement}
      </Typography>
      <Typography className={classes.text}>
        Bairro: {value.district} - CEP: {value.postal_code}
      </Typography>
      <Typography className={classes.text}>
        Cidade: {value.city} - Estado: N/A
      </Typography>
    </CardContent>
  </Card>;
};

export default CardLocalize;