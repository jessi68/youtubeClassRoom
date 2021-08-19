const YOU_TUBE_URL_ENDPOINT =  "https://content.googleapis.com/youtube/v3/search?";
const PERSONAL_KEY = "AIzaSyCZkHKRw9sty0-fxP_JstoiOOJzey-bc_Q";
const MAX_RESULT_NUM = 10;

export const getVideos = async (keyWord, nextPageToken) => {
      
      const url = `${YOU_TUBE_URL_ENDPOINT}&part=snippet&
      q=${encodeURI(keyWord)}
      &maxResults=${MAX_RESULT_NUM}&videoEmbeddable=true&type=video&key=${PERSONAL_KEY}&nextPageToken=${nextPageToken}`;
    
      const response = await fetch(url, {method: 'GET', mode: 'cors'});

      if(response.ok) {
        return response.json();
      }
  }