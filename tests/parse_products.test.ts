import parseProducts from '../utils/parseProducts'

describe('Check if parsing', () => {
  const products = parseProducts(
    '2 book at 12.49' +
      ' ' +
      '1 music CD at 14.99' +
      ' ' +
      '1 chocolate bar at 0.85'
  )

  test('name is correct', () => {
    const expectedOutput = 'music CD'
    expect(products[1].name).toBe(expectedOutput)
  })
  test('quantity is correct', () => {
    const expectedOutput = 1
    expect(products[1].quantity).toBe(expectedOutput)
  })
  test('price is correct', () => {
    const expectedOutput = 14.99
    expect(products[1].price).toBe(expectedOutput)
  })
  test('tax applied is correct', () => {
    const expectedOutput = 1.5
    expect(products[1].taxApplied).toBe(expectedOutput)
  })
  test('taxed price is correct', () => {
    const expectedOutput = '16.49'
    expect(products[1].taxedPrice.toFixed(2)).toBe(expectedOutput)
  })
  test('category is correct', () => {
    const expectedOutput = 'other'
    expect(products[1].category).toBe(expectedOutput)
  })
  test('imported value is correct', () => {
    const expectedOutput = false
    expect(products[1].imported).toBe(expectedOutput)
  })
})
