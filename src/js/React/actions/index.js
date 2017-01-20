import axios from 'axios';

import {
  INITIALIZE_APP
} from './types';

// when top level app component initially renders
export function initializeApp() {
  
  // fade in the body
  const classes = document.querySelector('body').className;
  document.querySelector('body').className += (classes.length) ? ' body--loaded' : 'body--loaded';

  return () => {};
}