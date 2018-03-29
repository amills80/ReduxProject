import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './src/reducers/player';
import Scoreboard from './src/containers/Scoreboard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render (
  <Provider store={store}>
  <ReactCSSTransitionGroup
          component="ul"
          transitionName="slide"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          transitionAppear={500}
          transitionAppearTimeout={500}>
    <Scoreboard />
  </ReactCSSTransitionGroup> 
  </Provider>,
  document.getElementById('root')
);
