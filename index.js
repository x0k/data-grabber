import { load, client } from 'gapi-client';
 
//On load, called to load the auth2 library and API client library.
load('client:auth2', initClient);
 
// Initialize the API client library
function initClient() {
  client.init({
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
    clientId: '410461802739-7v5t433ruper4kiad0h0kocg2j659rg7.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
  }).then(function () {
    // do stuff with loaded APIs
    console.log('it worked');
  });
}