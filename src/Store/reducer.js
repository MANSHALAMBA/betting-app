let initialState = {
  players: [],
  selectedPlayers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD PLAYERS":
      return {
        ...state,
        players: [...action.payload.data]
      };

    case "UPDATE SELECTED PLAYERS":
      return {
        ...state,
        selectedPlayers: [...action.payload.data]
      };

    case "UPDATE AFTER ROUND":
      let players = [...state.players];
      action.payload.data.forEach(element => {
        players[element.idx] = {
          ...players[element.idx],
          Fate: element.Fate,
          Winnings: element.Winnings
        };
      });
      return {
        ...state,
        players: players
      };
    default:
      return state;
  }
};

export default reducer;
