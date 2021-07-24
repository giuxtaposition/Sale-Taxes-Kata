import { product } from '../../types/'
export default class Product {
  name: string
  quantity: number
  price: number
  imported: boolean
  category: string
  taxedPrice: number
  taxApplied: number

  constructor(product: product) {
    this.name = product.name
    this.quantity = product.quantity
    this.price = product.price
    this.imported = product.imported
    this.category = product.category
    this.taxedPrice = product.taxedPrice
    this.taxApplied = product.taxApplied
  }
}
