import { category } from '../types'

export default function checkCategory(productName: string): category {
  if (productName.includes('book')) {
    return 'books'
  } else if (productName.includes('chocolate')) {
    return 'food'
  } else if (productName.includes('pills')) {
    return 'medical products'
  } else {
    return 'other'
  }
}
