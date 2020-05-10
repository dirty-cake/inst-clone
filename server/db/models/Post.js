import Model from './BaseModel.js'

export default class Post extends Model {
  static tableName = 'posts'

  static relationMappings = {
    comments: {
      relation: Model.HasManyRelation,
      modelClass: 'Comment',
      join: {
        from: 'posts.id',
        to: 'comments.post_id'
      }
    },
    likers: {
      relation: Model.ManyToManyRelation,
      modelClass: 'User',
      join: {
        from: 'posts.id',
        through: {
          from: 'likes.post_id',
          to: 'likes.user_id'
        },
        to: 'users.id'
      }
    },
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: 'User',
      join: {
        from: 'post.user_id',
        to: 'users.id'
      }
    }
  }
}
