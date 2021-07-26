import Product from '../libs/classes/Product'
import checkCategory from './checkCategory'
import checkImported from './checkImported'
import calculateTaxes from './calculateTaxes'

export default function parseProducts(input: string): Product[] {
  const products = input.split(/(?<=\d)\s(?=\d)/)

  const parsedInput = products.map(product => {
    const name = product.substring(
      product.indexOf(' ') + 1,
      product.lastIndexOf(' at')
    )

    const imported = checkImported(name)

    const category = checkCategory(name)

    const quantity = parseInt(product.split(' ')[0])

    const price = parseFloat(product.substring(product.lastIndexOf(' ') + 1))

    const taxApplied = calculateTaxes(price, imported, category)

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

  const productsObject = parsedInput.map(product => {
    return new Product(product)
  })
  return productsObject
}
