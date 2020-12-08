require('dotenv').config()

export const getBusinessArticles = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=business&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
};

export const getTechArticles = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tech&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
};

export const getScienceArticles = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=science&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
};