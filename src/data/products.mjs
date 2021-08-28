import path from 'path'

const raw_products = import.meta.globEager('./products/*.json')
const products = Object.entries(raw_products).map(([file_path, value]) => {
  const slug = path.basename(file_path, path.extname(file_path))
  return {
    ...value.default,
    slug
  }
})

// Exposing products directly would be simpler.
// This allows us to swap out the data storage easier.  
export default async function getProducts () {
  return products
}
