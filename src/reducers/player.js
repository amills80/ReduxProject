import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
  players: [
    {
      name: "Pearson Person",
      score: 20,
      created: '10/10/2000',
      updated: '10/12/2001',
      // id: 1,
    },
    {
      name: "Beach Bronson",
      score: 14,
      created: '11/10/2000',
      updated: '11/12/2001',
      // id: 2,
    },
    {
      name: "Thomson Twin",
      score: 53,
      created: '12/10/2000',
      updated: '12/12/2001',
      // id: 3,
    }],
    selectedPlayerIndex: -1
}

export default function Player(state = initialState, action){

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();

  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER: {
      const addPlayerList = [ ...state.players,
        {
          name: action.name,
          score: 0,
          created: `${month}/${day}/${year}`
        }];
      return {
        ...state,
        players: addPlayerList
      };
    }

    case PlayerActionTypes.REMOVE_PLAYER:{
      const removePlayerList = [
        ...state.players.slice(0, action.index),
        ...state.players.slice(action.index + 1)
      ];
    return {
      ...state,
      players: removePlayerList
    };
  }

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:{
      const updatePlayerList = state.players.map((player, index) => {
        if(index === action.index) {
        return {
          ...player,
          score: player.score + action.score,
          updated: `${month}/${day}/${year}`
        };
      }
      return player;
    });
    return {
      ...state,
      players: updatePlayerList
    };
  }

  case PlayerActionTypes.SELECT_PLAYER:
    return {
      ...state,
      selectedPlayerIndex: action.index
    };

  default:
    return state;
  }
}
