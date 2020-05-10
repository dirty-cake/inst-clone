import Model from './BaseModel.js'

export default class User extends Model {
  static tableName = 'users'

  static relationMappings = {
    posts: {
      relation: Model.HasManyRelation,
      modelClass: 'Post',
      join: {
        from: 'users.id',
        to: 'posts.user_id'
      }
    }
  }

  $formatJson(model, options) {
    const user = super.$formatJson(model, options)
    delete user.password
    return user
  }
} 
