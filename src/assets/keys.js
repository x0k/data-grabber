const data = {
  'apiKey': 'AIzaSyA0rvMrNVWVhm8HNd56eY64OXhVEVIxqlQ',
  'clientId': '169025190639-ktoqejmqod0hcfh8pbt7hknbg8apfps9.apps.googleusercontent.com',
  'scope': 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/script.external_request',
  'discoveryDocs': ['https://script.googleapis.com/$discovery/rest?version=v1']
};

const getRequest = data => ({
  'root': 'https://script.googleapis.com',
  'path': 'v1/scripts/M1qUJ-bECOgm4Y9z9evwE5gNpR_a-QLCI:run',
  'method': 'POST',
  'body': data
});

export { data, getRequest };