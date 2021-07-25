import Product from '../libs/classes/Product'
import checkCategory from './checkCategory'
import checkImported from './checkImported'
import calculateTaxes from './calculateTaxes'

export default function parseProducts(input: string): Product[] {
  let products = input.split(/(?<=\d)\s(?=\d)/)

  let parsedInput = products.map(product => {
    let name = product.substring(
      product.indexOf(' ') + 1,
      product.lastIndexOf(' at')
    )

    let imported = checkImported(name)

    let category = checkCategory(name)

    let quantity = parseInt(product.split(' ')[0])

    let price = parseFloat(product.substring(product.lastIndexOf(' ') + 1))

    let taxApplied = calculateTaxes(price, imported, category)

    return {
      name,
      imported,
      category,
      quantity,
      price: price * quantity,
      taxedPrice: (taxApplied + price) * quantity,
      taxApplied: taxApplied * quantity,
    }
  })

  let productsObject = parsedInput.map(product => {
    return new Product(product)
  })
  return productsObject
}
