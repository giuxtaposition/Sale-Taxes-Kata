export default function calculateTaxes(
  price: number,
  imported: boolean,
  category: string
) {
  let taxApplied = 0
  if (imported) {
    taxApplied += price / 20
  }
  if (category === 'other') {
    taxApplied += price / 10
  }
  return Math.round((Math.ceil(taxApplied * 20 - 0.5) / 20) * 100) / 100
}
