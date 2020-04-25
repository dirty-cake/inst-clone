import Objection from 'objection'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

export default class BaseModel extends Objection.Model {
  static modulePaths = [dirname(fileURLToPath(import.meta.url))]
}
