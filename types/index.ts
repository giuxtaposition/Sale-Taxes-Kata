export interface product {
  name: string
  quantity: number
  price: number
  imported: boolean
  category: string
  taxedPrice: number
  taxApplied: number
}

export type category = 'books' | 'food' | 'medical products' | 'other'
