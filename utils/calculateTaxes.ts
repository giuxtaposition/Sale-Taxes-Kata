export default function calculateTaxes(
  price: number,
  imported: boolean,
  category: string
): number {
  let taxApplied = 0
  if (imported) {
    taxApplied += price / 20
  }
  if (category === 'other') {
    taxApplied += price / 10
  }
  return Math.ceil(taxApplied * 20) / 20
}
