/**
 * Camada de acesso ao catálogo.
 * Troque as importações locais por fetch (PHP/Supabase) sem alterar as páginas.
 */
import { cafeInfo } from '../data/cafe'
import { categories, getCategoryById } from '../data/categories'
import {
  getFeaturedProducts,
  getProductById,
  getProductsByCategory,
  products,
  searchProducts,
} from '../data/products'

export async function fetchCafeInfo() {
  return cafeInfo
}

export async function fetchCategories() {
  return categories
}

export async function fetchCategory(id) {
  return getCategoryById(id) ?? null
}

export async function fetchProducts({ categoryId, query } = {}) {
  if (query) return searchProducts(query)
  if (categoryId) return getProductsByCategory(categoryId)
  return products
}

export async function fetchProduct(id) {
  return getProductById(id) ?? null
}

export async function fetchFeaturedProducts() {
  return getFeaturedProducts()
}
