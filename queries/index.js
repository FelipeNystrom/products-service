const db = require('../_db');
module.exports = {
  /*
  
  
  // EXAMPLE FROM POSTSERVICE BELOW!!
    
    getAllPosts: () => {
      const sql = 'SELECT * FROM post_service.posts;';
      console.log(db);
      return db.manyOrNone(sql);
    },
    getAllPostsByAuthor: author => {
      const sql = 'SELECT * FROM post_service.posts WHERE author = $1';
      return db.manyOrNone(sql, [author]);
    },
    createPost: (title, body, author, images) => {
      const sql =
        'INSERT INTO post_service.posts (title, body, author, images) VALUES($1, $2, $3, $4) RETURNING *';
      return db.one(sql, [title, body, author, images]);
    },
    updatePostWithId: (id, title, body, author, images) => {
      const sql =
        'UPDATE post_service.posts SET title = $2, body = $3, author = $4, images = $5 WHERE id = $1';
      return db.oneOrNone(sql, [id, title, body, author, images]);
    },
    deletePostWithId: id => {
      const sql = 'DELETE FROM post_service.posts WHERE id = $1 RETURNING *';
      return db.oneOrNone(sql, [id]);
    }

*/
};
