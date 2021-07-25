import Product from './Product'

export default class CashRegister {
  total: number
  saleTaxes: number
  products: Product[]

  constructor() {
    this.total = 0
    this.saleTaxes = 0
    this.products = []
  }

  addProduct(product: Product) {
    this.products.push(product)
    this.total += product.taxedPrice
    this.saleTaxes += product.taxApplied
  }

  addProducts(products: Product[]) {
    products.forEach(product => {
      this.products.push(product)
      this.total += product.taxedPrice
      this.saleTaxes += product.taxApplied
    })
  }

  resetCashRegister() {
    this.total = 0
    this.saleTaxes = 0
    this.products = []
  }

  printReceipt() {
    let productList: string[] = []

    this.products.forEach(product => {
      productList.push(
        `${product.quantity} ${product.name}: ${product.taxedPrice.toFixed(2)}`
      )
    })

    if (process.env.NODE_ENV !== 'test') {
      console.log('Here is your receipt! :)')
      productList.forEach(product => console.log(product))
      console.log(`Sales Taxes: ${this.saleTaxes.toFixed(2)}`)
      console.log(`Total: ${this.total.toFixed(2)}`)
    }

    return (
      productList.join(' ') +
      ' Sales Taxes: ' +
      this.saleTaxes.toFixed(2) +
      ' Total: ' +
      this.total.toFixed(2)
    )
  }
}
