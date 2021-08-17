const YOUTUBE_URL_ENDPOINT =  "https://www.googleapis.com/youtube/v3/search?";
const PERSONAL_KEY = "AIzaSyCZkHKRw9sty0-fxP_JstoiOOJzey-bc_Q";
  
  const MAX_RESULT_NUM = 10;
  
  export const getVideos = async (keyWord) => {
      const url = `${YOUTUBE_URL_ENDPOINT}?part=snippet&q=${keyWord}&maxResults=${MAX_RESULT_NUM}`

      fetch(url).then(function(response)  {
          if(response.ok) {
              return response.json();
          }
          
      })
  }