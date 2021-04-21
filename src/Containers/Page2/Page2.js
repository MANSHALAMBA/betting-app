import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../UI/Card/Card";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { randNumgenerator } from "../../Utils/Utils";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Page2 extends Component {
  state = {
    opposingBet: randNumgenerator()
  };

  regenerateNumber = () => {
    this.setState({ opposingBet: randNumgenerator() });
  };

  render() {
    // update redux :players
    let updatedPlayers = this.props.players.map(el => {
      return {
        idx: el.tableData.id,
        Fate: el.Bet == this.state.opposingBet ? "Win" : "Loose",
        Winnings: el.Bet == this.state.opposingBet ? el.Price * 2 : 0
      };
    });
    this.props.updateRedux(updatedPlayers);

    return (
      <div>
        <Typography variant="h3">{this.state.opposingBet}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={this.regenerateNumber}
        >
          Refresh Page
        </Button>
        <Link to="/">
          {" "}
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: "5px", marginTop: "5px" }}
          >
            Back
          </Button>
        </Link>
        <Grid container spacing={2}>
          {this.props.players.map(el => {
            let border = el.Bet == this.state.opposingBet ? "green" : "red";
            let status = el.Bet == this.state.opposingBet ? "Winner" : "Loose";
            return (
              <Grid item sm={12} md={4}>
                <Card
                  data={{
                    Name: el.Name,
                    Image: el["Profile Image"],
                    Price: el.Price,
                    Bet: el.Bet
                  }}
                  borderColor={border}
                  status={status}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    players: state.selectedPlayers
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    updateRedux: data => {
      dispatch({ type: "UPDATE AFTER ROUND", payload: { data: data } });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Page2);
