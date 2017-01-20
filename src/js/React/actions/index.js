import axios from 'axios';

import {
  INITIALIZE_APP
} from './types';

export function initializeApp() {

  // fade in the body
  const classes = document.querySelector('body').className;
  document.querySelector('body').className += (classes.length) ? ' body--loaded' : 'body--loaded';

  return (dispatch, getStore) => {
    // // GET all existing creatives
    // axios.get('../../assets/json/creatives.json').then((results) => {
    //   dispatch({
    //     type: GET_CREATIVES,
    //     payload: results.data.Creatives
    //   });
    // })
    // .catch((err) => {
    //   throw (err);
    // });
  };
}