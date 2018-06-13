import { Model } from 'objection'

class Product extends Model {
  static tableName = 'products'
  static idColumn = '_id'

  // validating new instances using json-schema
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'qty'],

      properties: {
        _id: { type: 'integer' },
        name: { type: 'string' },
        qty: {
          type: 'integer',
          minimum: 0,
        },
      },
    }
  }
}

export default Product
