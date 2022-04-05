import * as t from '../types';

const main = (state = {
  gigAdd: {

  },
}, action) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state, gigAdd: {
          name: action.payload
        }
      };
    default:
      return state;
  }
}

export default main