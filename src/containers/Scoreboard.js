import React from 'react';
// import Stopwatch from '../components/Stopwatch';
// import Counter from '../components/Counter';
// import Stats from '../components/Stats';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';

const INITIAL_STATE = {
  players: [
    {
  		name: "Pearson Person",
  		score: 20,
  		id: 1,
  	},
  	{
  		name: "Beach Bronson",
  		score: 14,
  		id: 2,
  	},
  	{
  		name: "Thomson Twin",
  		score: 53,
  		id: 3,
  	},
  ],
}

const Scoreboard = React.createClass({
  getInitialState: function () {
    return INITIAL_STATE;
  },
  onScoreChange: function(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  onAddPlayer: function(name) {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  },

  onRemovePlayer: function(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },

  render: function() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
});


export default Scoreboard;
