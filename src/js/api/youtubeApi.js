const YOU_TUBE_URL_ENDPOINT =  "https://content.googleapis.com/youtube/v3/search?";
const PERSONAL_KEY = "AIzaSyCZkHKRw9sty0-fxP_JstoiOOJzey-bc_Q";
const MAX_RESULT_NUM = 10;
  

  export const getVideos = async (keyWord) => {
      const url = `${YOU_TUBE_URL_ENDPOINT}&part=snippet&
      q=${encodeURI(keyWord)}
      &maxResults=${MAX_RESULT_NUM}&key=${PERSONAL_KEY}`;

      fetch(url).then(function(response)  {
          if(response.ok) {
              let items =  response.json()["items"];
              items.forEach((item) => {
                let publishTime = item["snippet"]["publishTime"];
                item["year"] = publishTime.substr(0, 4);
                item["month"] = publishTime.substr(5, 2);
                item["date"] = publishTime(8, 2);
              })

              return items;
          }
          
      })
  }