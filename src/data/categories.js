/** Categorias do cardápio — IDs estáveis para integração futura */
export const categories = [
  {
    id: 'cafes-especiais',
    name: 'Cafés Especiais',
    description: 'Origens selecionadas, extração precisa e aroma envolvente.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bebidas-quentes',
    name: 'Bebidas Quentes',
    description: 'Chocolate, chás e clássicos reconfortantes.',
    image:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bebidas-geladas',
    name: 'Bebidas Geladas',
    description: 'Frescor sofisticado para dias mais leves.',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'doces',
    name: 'Doces & Sobremesas',
    description: 'Confeitaria artesanal com acabamento impecável.',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'salgados',
    name: 'Salgados',
    description: 'Receitas leves e saborosas para acompanhar o café.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'brunch',
    name: 'Brunch',
    description: 'Combinações completas para manhãs especiais.',
    image:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80',
  },
]

export function getCategoryById(id) {
  return categories.find((category) => category.id === id)
}
