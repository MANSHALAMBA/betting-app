import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Card from "../../UI/Card/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Page1 extends Component {
  state = {
    loading: true
  };

  onSelectionChangeHandler = rows => {
    this.props.updateSelectedPlayers(rows);
  };

  render() {
    console.log(this.props.players);
    return (
      <div style={{ marginTop: "15px" }}>
        {this.props.players.length == 0 ? (
          <CircularProgress color="secondary" />
        ) : (
          <div>
            <Grid
              container
              spacing={2}
              style={{ paddingRight: "7px", paddingLeft: "7px" }}
            >
              <Grid
                item
                xs={12}
                md={4}
                style={{ "border-right": "2px solid #D3D3D3" }}
              >
                <Typography variant="h3"> Playing 9</Typography>
                {this.props.selectedPlayers.length == 0 ? (
                  <Typography variant="subtitle1">
                    {" "}
                    No Selected Players
                  </Typography>
                ) : (
                  this.props.selectedPlayers.map(el => {
                    return (
                      <Card
                        key={el.Name}
                        data={{
                          Name: el.Name,
                          Image: el["Profile Image"],
                          Price: el.Price,
                          Bet: el.Bet
                        }}
                      />
                    );
                  })
                )}
                <Link to="/page2">
                  {" "}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.startGameHandler}
                    style={{ marginBottom: "5px", marginTop: "5px" }}
                  >
                    Start
                  </Button>
                </Link>
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography variant="h3"> Select Playing 9</Typography>
                <MaterialTable
                  columns={[
                    { title: "Name", field: "Name" },
                    {
                      title: "Image",
                      field: "Profile Image",
                      render: rowData => (
                        <Avatar
                          alt={rowData.Name}
                          src={rowData["Profile Image"]}
                        />
                      )
                    },
                    { title: "Price", field: "Price" },
                    {
                      title: "Bet",
                      field: "Bet"
                    },
                    { title: "Fate", field: "Fate" },
                    { title: "Winnings", field: "Winnings" }
                  ]}
                  data={this.props.players}
                  title="Players"
                  options={{
                    selection: true,
                    selectionProps: rowData => ({
                      disabled: this.props.selectedPlayers.length >= 9,
                      color: "primary"
                    })
                  }}
                  onSelectionChange={this.onSelectionChangeHandler}
                />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

const mapStatetoprops = state => {
  return {
    players: state.players,
    selectedPlayers: state.selectedPlayers
  };
};

const mapDispatchtoprops = dispatch => {
  return {
    loadPlayers: data => {
      dispatch({ type: "LOAD PLAYERS", payload: { data: data } });
    },

    updateSelectedPlayers: data => {
      dispatch({ type: "UPDATE SELECTED PLAYERS", payload: { data: data } });
    }
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(Page1);
