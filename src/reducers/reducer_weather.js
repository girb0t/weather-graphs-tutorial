import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
  // Either of 2 following return statements work:

    // NEVER use .push, which would mutate the state
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ]; // returns [city, city, city] NOT [city, [city, city]]

  }
  return state;
}
