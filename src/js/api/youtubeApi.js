const YOU_TUBE_URL_ENDPOINT =  "https://content.googleapis.com/youtube/v3/search?";
const PERSONAL_KEY = "AIzaSyCZkHKRw9sty0-fxP_JstoiOOJzey-bc_Q";
const MAX_RESULT_NUM = 10;

const DEFAULT_URL_PARAM_FOR_GET_VIDEO = {
  part: "snippet",
  type: "video",
  regionCode: "kr",
  safeSearch: "strict",
  order: "relevance",
  key: PERSONAL_KEY,
}

export const rateVideo = async (videoId, rating) => {
  const url = new URL(YOU_TUBE_URL_ENDPOINT);
  const urlSearchParam = {id: videoId, rating: rating};
  const parameters = new URLSearchParams(urlSearchParam);
  url.search = parameters.toString();
  try {
    const response = await fetch(url, {method: 'POST', mode: 'cors'});
    if(!response.ok) {
       throw new Error(response.status);
    }
    return true;
  } catch(err) {
    return false
  }
}

export const getVideos = async (keyWord, nextPageToken) => {
      const url = new URL(YOU_TUBE_URL_ENDPOINT);
      const urlSearchParam = {...DEFAULT_URL_PARAM_FOR_GET_VIDEO, maxResults: MAX_RESULT_NUM,  pageToken: nextPageToken || "",
            q: keyWord,

    };
    const parameters = new URLSearchParams(urlSearchParam);
    url.search = parameters.toString();
    

      try {
        const response = await fetch(url, {method: 'GET', mode: 'cors'});
        if(!response.ok) {
           throw new Error(response.status);
        }
        return await response.json();
      } catch(err)  {
          
      }
     
  }

  // {
  //   part: "snippet",
  //   type: "video",
  //   maxResults:MAX_RESULT_NUM,
  //   regionCode: "kr",
  //   safeSearch: "strict",
  //   pageToken: nextPageToken || "",
  //   q: keyWord,
  //   key: PERSONAL_KEY,
  //   order: "relevance"
  // }