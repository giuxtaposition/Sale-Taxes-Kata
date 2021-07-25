import checkImported from '../utils/checkImported'
import checkCategory from '../utils/checkCategory'
import calculateTaxes from '../utils/calculateTaxes'

describe('Check if rounding is correct', () => {
  const input = '1 imported bottle of perfume at 47.50'
  let name = input.substring(input.indexOf(' ') + 1, input.lastIndexOf(' at'))
  let imported = checkImported(name)
  let category = checkCategory(name)
  let price = parseFloat(input.substring(input.lastIndexOf(' ') + 1))

  let taxApplied = calculateTaxes(price, imported, category)

  let taxedPrice = taxApplied + price

  test('when calculating tax to be applied', () => {
    const expectedOutput = parseFloat('7.15')

    expect(taxApplied).toBe(expectedOutput)
  })
  test('when calculating taxed Price', () => {
    const expectedOutput = parseFloat('54.65')
    expect(taxedPrice).toBe(expectedOutput)
  })
  test('when there is a trailing decimal zero', () => {
    const input = '1 imported box of chocolates at 10.00'

    const expectedOutput = '10.50'

    let name = input.substring(input.indexOf(' ') + 1, input.lastIndexOf(' at'))

    let imported = checkImported(name)

    let category = checkCategory(name)
    let price = parseFloat(input.substring(input.lastIndexOf(' ') + 1))

    let taxApplied = calculateTaxes(price, imported, category)

    let taxedPrice = taxApplied + price

    expect(taxedPrice.toFixed(2)).toBe(expectedOutput)
  })
})
