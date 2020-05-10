import Model from './BaseModel.js'

export default class Comment extends Model {
  static tableName = 'comments'

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: 'User',
      join: {
        from: 'comments.user_id',
        to: 'users.id'
      }
    }
  }
} 