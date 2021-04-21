import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Page1 from "./Containers/Page1/Page1";
import Page2 from "./Containers/Page2/Page2";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Store/reducer";
import { connect } from "react-redux";

import "./App.css";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json"
      )
      .then(response => {
        console.log(response);
        const players = response.data.map(el => {
          return {
            ...el,
            Fate: "",
            Winnings: ""
          };
        });
        // this.setState({ loading: false });
        this.props.loadPlayers(players);
      })
      .catch(error => {});
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    );
  }
}

const mapDispatchtoprops = dispatch => {
  return {
    loadPlayers: data => {
      dispatch({ type: "LOAD PLAYERS", payload: { data: data } });
    }
  };
};

export default connect(null, mapDispatchtoprops)(App);
