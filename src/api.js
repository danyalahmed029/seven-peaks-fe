import axios from 'axios';
export const fetchArticles = async (query) => {
    const response = await axios
      .get(`https://content.guardianapis.com/search?api-key=test&${query}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    return response.data.response.results;
  };

  export const fetchArticle = async (articleId) => {
    const response = await axios
      .get(`https://content.guardianapis.com/${articleId}?api-key=test&show-fields=body,headline,thumbnail`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    return response.data.response.content;
  };