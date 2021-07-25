import Product from './Product'

export default class CashRegister {
  itemList: string[]
  total: string
  saleTaxes: string

  constructor(products: Product[]) {
    let total = 0
    let saleTaxes = 0
    let itemList: string[] = []
    products.forEach(product => {
      let totalPrice = product.taxedPrice
      itemList.push(
        `${product.quantity} ${product.name}: ${totalPrice.toFixed(2)}`
      )
      total += totalPrice
      saleTaxes += product.taxApplied
    })

    this.itemList = itemList
    this.total = total.toFixed(2)
    this.saleTaxes = saleTaxes.toFixed(2)
  }

  printReceipt() {
    if (process.env.NODE_ENV !== 'test') {
      console.log('Here is your receipt! :)')
      this.itemList.forEach(item => {
        console.log(item)
      })
      console.log(`Sales Taxes: ${this.saleTaxes}`)
      console.log(`Total: ${this.total}`)
    }

    return (
      this.itemList.join(' ') +
      ' Sales Taxes: ' +
      this.saleTaxes +
      ' Total: ' +
      this.total
    )
  }
}
