import Model from './BaseModel.js'

export default class Post extends Model {
  static tableName = 'posts'

  static relationMappings = {
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
