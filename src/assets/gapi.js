const data = {
  apiKey: 'AIzaSyA0rvMrNVWVhm8HNd56eY64OXhVEVIxqlQ',
  clientId: '169025190639-ktoqejmqod0hcfh8pbt7hknbg8apfps9.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/script.external_request',
  discoveryDocs: ['https://script.googleapis.com/$discovery/rest?version=v1']
};

class API {

  gapi;
  googleAuth;
  isAuthorized = false;
  onStatusUpdate = null;
  user = null;
  onUserUpdate = null;
  scriptId = 'M1qUJ-bECOgm4Y9z9evwE5gNpR_a-QLCI';

  _satusUpdate = status => {
    this.isAuthorized = status;
    if (this.onStatusUpdate)
      this.onStatusUpdate(status);
  }

  _userUpdate = user => {
    this.user = user;
    if (this.onUserUpdate)
      this.onUserUpdate(this.user);
  };

  constructor (data) {
    let setAuth = () => {
      this.googleAuth = this.gapi.auth2.getAuthInstance();
      this.googleAuth.isSignedIn.listen(this._satusUpdate);
      this.googleAuth.currentUser.listen(this._userUpdate);
      this._satusUpdate(this.googleAuth.isSignedIn.get());
      if (this.isAuthorized) {
        this._userUpdate(this.googleAuth.currentUser.get());
      }
    };
    let load = () => {
      this.gapi.client
        .init(data)
        .then(setAuth);
    };
    let init = () => {
      this.gapi = window.gapi;
      this.gapi.load('client:auth2', load);
    };
    if (window.gapi) {
      init();
    } else {
      window.addEventListener('gapiLoaded', init);
    }
  }

  authorize () {
    if (this.isAuthorized) {
      return this.googleAuth.signOut();
    } else {
      return this.googleAuth.signIn();
    }
  }

  fetch (url) {
    let data = {
      'function': 'fetch',
      'parameters': [ url ],
      'devMode': true
    };
    let request = this.gapi.client.request({
      'root': 'https://script.googleapis.com',
      'path': `v1/scripts/${this.scriptId}:run`,
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

}

export default new API(data);