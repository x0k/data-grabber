const data = {
  apiKey: 'AIzaSyA0rvMrNVWVhm8HNd56eY64OXhVEVIxqlQ',
  clientId: '169025190639-ktoqejmqod0hcfh8pbt7hknbg8apfps9.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/script.external_request',
  discoveryDocs: ['https://script.googleapis.com/$discovery/rest?version=v1']
};

class API {

  #gapi;
  #googleAuth;
  #onLoad = null;
  #isAuthorized = false;
  #onStatusUpdate = null;

  #satusUpdate = status => {
    this.#isAuthorized = status;
    if (this.#onStatusUpdate)
      this.#onStatusUpdate(status);
  }

  constructor (data) {
    let setAuth = () => {
      this.#googleAuth = this.#gapi.auth2.getAuthInstance();
      this.#googleAuth.isSignedIn.listen(this.#satusUpdate);
      this.#satusUpdate(this.#googleAuth.isSignedIn.get());
      return this.#googleAuth.isSignedIn.get();
    };
    let load = () => {
      this.#gapi.client
        .init(data)
        .then(setAuth)
        .then(status => {
          if (this.#onLoad)
            this.#onLoad(status);
        });
    };
    let init = () => {
      this.#gapi = window.gapi;
      this.#gapi.load('client:auth2', load);
    };
    if (window.gapi) {
      init();
    } else {
      window.addEventListener('gapiLoaded', init);
    }
  }

  authorize () {
    if (this.#isAuthorized) {
      return this.#googleAuth.signOut();
    }
    return this.#googleAuth.signIn();
  }

  fetch (url) {
    let data = {
      'function': 'fetch',
      'parameters': [ url ],
      'devMode': true
    };
    let request = this.#gapi.client.request({
      'root': 'https://script.googleapis.com',
      'path': 'v1/scripts/M1qUJ-bECOgm4Y9z9evwE5gNpR_a-QLCI:run',
      'method': 'POST',
      'body': data
    });
    return new Promise((resolve, reject) => {
      request.execute(response => {
        if (response.error && response.error.status) {
          reject('Error calling API: ' + JSON.stringify(response, null, 2));
        } else if (response.error) {
          let error = response.error.details[0];
          reject('Script error! Message: ' + error.errorMessage);
        } else {
          resolve(response.response.result);
        }
      });
    });
  }

  set onLoad (val) {
    this.#onLoad = val;
  }

  set onStatusUpdate (val) {
    this.#onStatusUpdate = val;
  }

  get user () {
    return this.#googleAuth.currentUser.get();
  }

}

export default new API(data);