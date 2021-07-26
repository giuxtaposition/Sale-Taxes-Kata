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

  addProduct(product: Product): void {
    this.products.push(product)
    this.total += product.taxedPrice
    this.saleTaxes += product.taxApplied
  }

  addProducts(products: Product[]): void {
    products.forEach(product => {
      this.products.push(product)
      this.total += product.taxedPrice
      this.saleTaxes += product.taxApplied
    })
  }

  resetCashRegister(): void {
    this.total = 0
    this.saleTaxes = 0
    this.products = []
  }

  makeProductList(): string[] {
    const productList: string[] = []
    this.products.forEach(product => {
      productList.push(
        `${product.quantity} ${product.name}: ${product.taxedPrice.toFixed(2)}`
      )
    })
    return productList
  }

  printReceipt(): string {
    const productList: string[] = this.makeProductList()
    const saleTaxes = this.saleTaxes.toFixed(2)
    const total = this.total.toFixed(2)

    if (process.env.NODE_ENV !== 'test') {
      console.log('Here is your receipt! :)')
      productList.forEach(product => console.log(product))
      console.log(`Sales Taxes: ${saleTaxes}`)
      console.log(`Total: ${total}`)
    }

    return (
      productList.join(' ') + ' Sales Taxes: ' + saleTaxes + ' Total: ' + total
    )
  }
}
