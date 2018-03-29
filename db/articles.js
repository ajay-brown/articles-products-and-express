class DS_articles {
  constructor() {
    this.list = [];
  }
  addNewArticle(title, body, author) {
    this.list.push({
      title,
      body,
      author,
      urlTitle: encodeURLComponent(title)
    });
    return this.list;
  }
  getAllArticles() {
    return this.list;
  }
  getArticleByTitle(title) {
    let result = "";
    this.list.forEach(article => {
      if (article.title === title) {
        result = article;
      }
    });
    return result;
  }
  editArticleByTitle(title, body, author) {
    let newArticle = {};
    this.list.forEach(article => {
      if (article.title === title) {
        newArticle.title = article.title;
        newArticle.body = article.body;
        newArticle.author = article.author;
        newArticle.urlTitle = encodeURLComponent(newArticle.title);
      }
    });
    return newArticle;
  }
  deleteArticleByTitle(title) {
    this.list.forEach((article, index) => {
      if (article.title === title) {
        this.list.splice(index, 1);
      }
    });
    return this.list;
  }
}
module.exports = new DS_articles();
