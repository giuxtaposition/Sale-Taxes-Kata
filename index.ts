import CashRegister from './libs/classes/CashRegister'
import parseProducts from './utils/parseProducts'

const parseArguments = (args: Array<string>): string => {
  if (!args.length) {
    throw new Error('Please add input string as an argument')
  } else {
    if (typeof args[0] !== 'string') {
      throw new Error('Your input should be a string!')
    }
  }

  return args[0]
}

try {
  const input = parseArguments(process.argv.slice(2))
  let products = parseProducts(input)
  let register = new CashRegister()
  register.addProducts(products)
  register.printReceipt()
} catch (e) {
  console.log('Error, something bad happened, message: ', (e as Error).message)
}
