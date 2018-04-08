var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'articles_user',
    password: 'password',
    database: 'articles_db'
  }
});
// knex.raw('SELECT * from articles').then(data => {
//   console.log('data', data)
//   ;
// });
class DS_articles {
  constructor() {
    this.list = [];
  }
  addNewArticle(title, body, author) {
    this.list.push({
      title,
      body,
      author,
      urlTitle: encodeURIComponent(title)
    });
    return this.list;
  }
  getAllArticles() {
    //return this.list;
    return knex.raw('SELECT * from articles').then(data => {
      return data.rows; //returning promise object
    });
  }
  getArticleByTitle(id) {
    // let result = '';
    // this.list.forEach(article => {
    //   if (article.title === title) {
    //     result = article;
    //   }
    // });
    // return result;
    return knex
      .raw(`SELECT * FROM articles WHERE article_id = ${id}`)
      .then(data => {
        // console.log(data, 'data');
        return data.rows; //returning promise object
      });
  }
  editArticleByTitle(title, body, author) {
    let updatedArticle = {};
    this.list.forEach(article => {
      if (article.title === title) {
        article.title = newArticle.title;
        article.body = newArticle.body;
        article.author = newArticle.author;
        newArticle.urlTitle = encodeURIComponent(newArticle.title);
      }
    });
    return updatedArticle;
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
