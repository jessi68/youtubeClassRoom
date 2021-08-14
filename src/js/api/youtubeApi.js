var OAUTH2_SCOPES = [
    'https://www.googleapis.com/auth/youtube'
  ];
  

async function youtubesSearchByName(name){
    const request = gapi.client.youtube.search.list({
        name: name
    })
}