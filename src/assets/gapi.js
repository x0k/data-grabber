let gapi = window.gapi;

class API {

  googleAuth;
  isAuthorized;
  currentApiRequest;

  constructor (data) {
    let init = () => {
      gapi.client
        .init(data)
        .then(() => {
          this.googleAuth = gapi.auth2.getAuthInstance();
          this.googleAuth.isSignedIn.listen(this.updateStatus);
        });
    };
    gapi.load('client:auth2', init);
  }

  sendRequest(requestDetails) {
    this.currentApiRequest = requestDetails;
    if (this.isAuthorized) {
      gapi.client.request(requestDetails);
      this.currentApiRequest = {};
    } else {
      this.googleAuth.signIn();
    }
  }

  updateStatus(isSignedIn) {
    if (isSignedIn) {
      this.isAuthorized = true;
      if (this.currentApiRequest) {
        this.sendRequest(this.currentApiRequest);
      }
    } else {
      this.isAuthorized = false;
    }
  }

}

const data = {
  apiKey: 'AIzaSyCkAfKa8_ihDjgXOmPAL2Kt6u-rLIjrt7M',
  clientId: '410461802739-7v5t433ruper4kiad0h0kocg2j659rg7.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
};

export default new API(data);