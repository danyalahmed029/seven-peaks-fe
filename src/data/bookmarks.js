const table_name = "bookmarks";
let articles = localStorage.getItem(table_name);

articles = articles ? JSON.parse(articles) : [];


const setArticleBookmark = (article) => {
    articles = articles.concat(article);
    localStorage.setItem(table_name, JSON.stringify(articles));
}

const findArticle = (id) => {
    const checkArticle = articles.find(obj => obj.id === id);
    return checkArticle;
}

const removeArticle = (id) => {
    articles = articles.filter(obj => obj.id !== id);
    console.log(articles)
    localStorage.setItem(table_name, JSON.stringify(articles));
}


export {
    articles,
    setArticleBookmark,
    findArticle,
    removeArticle
}
