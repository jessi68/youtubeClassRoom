const YOU_TUBE_URL_ENDPOINT =  "https://content.googleapis.com/youtube/v3/search?";
const PERSONAL_KEY
const MAX_RESULT_NUM = 10;

const DEFAULT_URL_PARAM = {
  part: "snippet",
  type: "video",
  regionCode: "kr",
  safeSearch: "strict",
  order: "relevance",
  key: PERSONAL_KEY,
}

export const getVideos = async (keyWord, nextPageToken) => {
      const url = new URL(YOU_TUBE_URL_ENDPOINT);
      let urlSearchParam = {...DEFAULT_URL_PARAM, maxResults: MAX_RESULT_NUM,  pageToken: nextPageToken || "",
            q: keyWord,
          order: "relevance"
    };
    const parameters = new URLSearchParams(urlSearchParam);
    url.search = parameters.toString();
    const response = await fetch(url, {method: 'GET', mode: 'cors'});

      if(response.ok) {
        return response.json();
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
