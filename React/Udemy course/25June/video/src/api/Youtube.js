import axios from 'axios'
//key genereted by the youtube api
const KEY="AIzaSyBRbZyBpANo-EDB9MaI8wBrUq4pt0c4SA0";

export default axios.create({
  //baseURL for the api
  baseURL: "https://www.googleapis.com/youtube/v3",
  //params for the api 

  params: {
    part: "snippet",
    type: "video",
	maxResults: 100,
    key: KEY,
  },
});
