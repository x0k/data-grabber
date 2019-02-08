import GAPI from 'easy-gapi';
import { data, getRequest } from '../credentials/testKeys';

class API extends GAPI {

  constructor (onStatusUpdate) {
    super(data, onStatusUpdate);
  }

  fetch (url) {
    let data = {
      'function': 'fetch',
      'parameters': [ url ],
      'devMode': false
    };
    return super.execute(getRequest(data));
  }

}

export default API;