import Model from './BaseModel.js'

export default class User extends Model {
  static tableName = 'users'

  static relationMappings = {
    children: {
      relation: Model.HasManyRelation,
      modelClass: 'Post',
      join: {
        from: 'users.id',
        to: 'posts.user_id'
      }
    }
  }
} 
