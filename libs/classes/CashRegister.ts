import Product from './Product'

export default class CashRegister {
  itemList: string
  total: string
  saleTaxes: string

  constructor(products: Product[]) {
    let total = 0
    let saleTaxes = 0
    let itemList = ''
    products.forEach(function (product, index, array) {
      let totalPrice = product.taxedPrice * product.quantity
      itemList +=
        `${product.quantity} ${product.name}: ${totalPrice}` +
        (index !== array.length - 1 ? ' \n' : '')
      total += totalPrice
      saleTaxes += product.taxApplied
    })

    this.itemList = itemList
    this.total = total.toFixed(2)
    this.saleTaxes = saleTaxes.toFixed(2)
  }

  printReceipt() {
    console.log('Here is your receipt! :)')
    console.log(this.itemList)
    console.log(`Sales Taxes: ${this.saleTaxes}`)
    console.log(`Total: ${this.total}`)
  }
}
