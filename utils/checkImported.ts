export default function checkImported(productName: string): boolean {
  if (productName.includes('imported')) {
    return true
  } else {
    return false
  }
}
