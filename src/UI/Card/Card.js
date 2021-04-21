import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  let border = props.borderColor != "" ? "solid 2px " + props.borderColor : "";

  return (
    <div
      className={classes.root}
      style={{ marginTop: "5px", marginBottom: "5px" }}
    >
      <Paper className={classes.paper} style={{ border: border }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Avatar
                alt={props.data.Name}
                src={props.data.Image}
                className={classes.large}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {props.data.Name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <AcUnitIcon color="secondary" fontSize="small" />{" "}
                  {props.data.Bet}
                  &nbsp; &nbsp; &nbsp;
                  <AccountBalanceIcon color="secondary" fontSize="small" />
                  {props.data.Price}
                </Typography>
                {props.status && <Typography gutterBottom variant="h5" style={{color:props.borderColor}}>
                  {props.status}
                </Typography>}
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
