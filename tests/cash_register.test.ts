import CashRegister from '../libs/classes/CashRegister'
import parseProducts from '../utils/parseProducts'

const tests = [
  {
    input:
      '2 book at 12.49' +
      ' ' +
      '1 music CD at 14.99' +
      ' ' +
      '1 chocolate bar at 0.85',
    output:
      '2 book: 24.98' +
      ' ' +
      '1 music CD: 16.49' +
      ' ' +
      '1 chocolate bar: 0.85' +
      ' ' +
      'Sales Taxes: 1.50' +
      ' ' +
      'Total: 42.32',
  },
  {
    input:
      '1 imported box of chocolates at 10.00' +
      ' ' +
      '1 imported bottle of perfume at 47.50',
    output:
      '1 imported box of chocolates: 10.50' +
      ' ' +
      '1 imported bottle of perfume: 54.65' +
      ' ' +
      'Sales Taxes: 7.65' +
      ' ' +
      'Total: 65.15',
  },
  {
    input:
      '1 imported bottle of perfume at 27.99' +
      ' ' +
      '1 bottle of perfume at 18.99' +
      ' ' +
      '1 packet of headache pills at 9.75' +
      ' ' +
      '3 box of imported chocolates at 11.25',
    output:
      '1 imported bottle of perfume: 32.19' +
      ' ' +
      '1 bottle of perfume: 20.89' +
      ' ' +
      '1 packet of headache pills: 9.75' +
      ' ' +
      '3 imported box of chocolates: 35.55' +
      ' ' +
      'Sales Taxes: 7.90' +
      ' ' +
      'Total: 98.38',
  },
]

describe('Check if cash register gives right output', () => {
  const register = new CashRegister()
  test('input1 return output1', () => {
    const input = tests[0].input
    const expectedResult = tests[0].output

    const products = parseProducts(input)
    register.resetCashRegister()
    register.addProducts(products)
    const result = register.printReceipt()

    expect(result).toBe(expectedResult)
  })

  test('input2 return output2', () => {
    const input = tests[1].input
    const expectedResult = tests[1].output

    const products = parseProducts(input)
    register.resetCashRegister()
    register.addProducts(products)
    const result = register.printReceipt()

    expect(result).toBe(expectedResult)
  })

  test('input3 return output3', () => {
    const input = tests[2].input
    const expectedResult = tests[2].output

    const products = parseProducts(input)
    register.resetCashRegister()
    register.addProducts(products)
    const result = register.printReceipt()

    expect(result).toBe(expectedResult)
  })
})

describe('Check if cash register prints', () => {
  const register = new CashRegister()
  const input = '1 imported bottle of perfume at 27.99'

  const products = parseProducts(input)
  register.resetCashRegister()
  register.addProducts(products)

  test('right sale taxes', () => {
    const expectedResult = 4.2
    expect(register.saleTaxes).toBe(expectedResult)
  })
  test('right total', () => {
    const expectedResult = 32.19
    expect(register.total).toBe(expectedResult)
  })
  test('right product list', () => {
    const expectedResult = '1 imported bottle of perfume: 32.19'
    expect(register.makeProductList()[0]).toBe(expectedResult)
  })
})
