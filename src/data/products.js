/** Catálogo fictício — estrutura alinhada a futura tabela Supabase / API PHP */
export const products = [
  {
    id: 'espresso-maison',
    name: 'Espresso Maison',
    categoryId: 'cafes-especiais',
    price: 12,
    shortDescription: 'Blend exclusivo com notas de cacau e caramelo.',
    description:
      'Extração curta e intensa do nosso blend assinatura. Notas de cacau tostado, caramelo e finalização aveludada. Servido na xícara de porcelana.',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    tags: ['assinatura', 'intenso'],
    featured: true,
    available: true,
    prepTime: '3 min',
  },
  {
    id: 'cappuccino-veludo',
    name: 'Cappuccino Veludo',
    categoryId: 'cafes-especiais',
    price: 18,
    shortDescription: 'Microespuma sedosa e espresso equilibrado.',
    description:
      'Espresso Maison harmonizado com leite vaporizado em microespuma sedosa. Proporção clássica italiana com acabamento visual delicado.',
    image:
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1000&q=80',
    tags: ['clássico', 'cremoso'],
    featured: true,
    available: true,
    prepTime: '5 min',
  },
  {
    id: 'flat-white-jardins',
    name: 'Flat White Jardins',
    categoryId: 'cafes-especiais',
    price: 19,
    shortDescription: 'Duplo espresso e textura sedosa.',
    description:
      'Dois shots de espresso cobertos por uma camada fina de leite vaporizado. Mais intenso que o cappuccino, com corpo aveludado.',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80',
    tags: ['intenso'],
    featured: false,
    available: true,
    prepTime: '5 min',
  },
  {
    id: 'filtre-origem',
    name: 'Filtrado de Origem',
    categoryId: 'cafes-especiais',
    price: 22,
    shortDescription: 'V60 com grãos de origem única da estação.',
    description:
      'Preparação em V60 com grãos de origem única rotativos. Perfil frutado e floral, destacado em xícara limpa. Pergunte a origem do dia.',
    image:
      'https://images.unsplash.com/photo-1497935582031-02745867b4ce?auto=format&fit=crop&w=1000&q=80',
    tags: ['origem', 'especial'],
    featured: true,
    available: true,
    prepTime: '6 min',
  },
  {
    id: 'mocha-noir',
    name: 'Mocha Noir',
    categoryId: 'bebidas-quentes',
    price: 21,
    shortDescription: 'Chocolate belga 70% e espresso.',
    description:
      'Chocolate belga 70% derretido lentamente, espresso Maison e leite vaporizado. Finalização com cacao em pó e raspas finas.',
    image:
      'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=1000&q=80',
    tags: ['chocolate'],
    featured: false,
    available: true,
    prepTime: '6 min',
  },
  {
    id: 'chai-latte',
    name: 'Chai Latte Especiado',
    categoryId: 'bebidas-quentes',
    price: 18,
    shortDescription: 'Blend de especiarias e leite cremoso.',
    description:
      'Concentrado artesanal de chai com cardamomo, canela e gengibre, harmonizado com leite vaporizado. Aroma quente e envolvente.',
    image:
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1000&q=80',
    tags: ['especiarias'],
    featured: false,
    available: true,
    prepTime: '5 min',
  },
  {
    id: 'chocolate-belga',
    name: 'Chocolate Belga Quente',
    categoryId: 'bebidas-quentes',
    price: 20,
    shortDescription: 'Cacau intenso, textura aveludada.',
    description:
      'Chocolate belga puro, sem excesso de açúcar, textura densa e finalização com marshmallow artesanal opcional.',
    image:
      'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1000&q=80',
    tags: ['clássico'],
    featured: false,
    available: true,
    prepTime: '5 min',
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte Maison',
    categoryId: 'bebidas-geladas',
    price: 19,
    shortDescription: 'Espresso gelado sobre leite frio.',
    description:
      'Espresso Maison resfriado sobre leite gelado e gelo cristalino. Equilíbrio limpo entre intensidade e frescor.',
    image:
      'https://images.unsplash.com/photo-1517959105821-eaf2591984dd?auto=format&fit=crop&w=1000&q=80',
    tags: ['gelado'],
    featured: true,
    available: true,
    prepTime: '4 min',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew 16h',
    categoryId: 'bebidas-geladas',
    price: 20,
    shortDescription: 'Infusão longa, baixa acidez.',
    description:
      'Extração a frio por 16 horas. Perfil suave, baixa acidez e doçura natural. Servido puro ou com um toque de leite.',
    image:
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1000&q=80',
    tags: ['especial', 'gelado'],
    featured: false,
    available: true,
    prepTime: '2 min',
  },
  {
    id: 'affogato',
    name: 'Affogato Clássico',
    categoryId: 'bebidas-geladas',
    price: 24,
    shortDescription: 'Sorvete de baunilha e espresso quente.',
    description:
      'Bola de sorvete de baunilha Madagascar coberta por um shot de espresso quente. Contraste de temperatura e textura.',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80',
    tags: ['sobremesa'],
    featured: true,
    available: true,
    prepTime: '3 min',
  },
  {
    id: 'torta-caramelo',
    name: 'Torta de Caramelo Salgado',
    categoryId: 'doces',
    price: 26,
    shortDescription: 'Base crocante, ganache e flor de sal.',
    description:
      'Massa sablée, ganache de caramelo e toque de flor de sal. Sobremesa assinatura da casa, finalizada na hora.',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=80',
    tags: ['assinatura'],
    featured: true,
    available: true,
    prepTime: 'pronto',
  },
  {
    id: 'croissant-manteiga',
    name: 'Croissant de Manteiga',
    categoryId: 'doces',
    price: 14,
    shortDescription: 'Folhado francês, fermentação lenta.',
    description:
      'Croissant de fermentação lenta, com camadas crocantes e miolo aéreo. Servido levemente aquecido.',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80',
    tags: ['padaria'],
    featured: false,
    available: true,
    prepTime: 'pronto',
  },
  {
    id: 'brownie-70',
    name: 'Brownie 70%',
    categoryId: 'doces',
    price: 18,
    shortDescription: 'Miolo úmido e crosta delicada.',
    description:
      'Brownie de chocolate 70% com nozes tostadas. Servido levemente morninho com flor de sal.',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    tags: ['chocolate'],
    featured: false,
    available: true,
    prepTime: 'pronto',
  },
  {
    id: 'cheesecake-maracuja',
    name: 'Cheesecake de Maracujá',
    categoryId: 'doces',
    price: 24,
    shortDescription: 'Cremoso com coulis cítrico.',
    description:
      'Base de biscoito amanteigado, creme de queijo suave e coulis de maracujá fresco. Equilíbrio entre doçura e acidez.',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=80',
    tags: ['cítrico'],
    featured: false,
    available: true,
    prepTime: 'pronto',
  },
  {
    id: 'quiche-alhos',
    name: 'Quiche de Alho-Poró',
    categoryId: 'salgados',
    price: 22,
    shortDescription: 'Massa amanteigada e recheio cremoso.',
    description:
      'Quiche individual com alho-poró confitado, creme fresco e queijo gruyère. Leve e aromática.',
    image:
      'https://images.unsplash.com/photo-1608039829574-ccc15bb9b2b6?auto=format&fit=crop&w=1000&q=80',
    tags: ['salgado'],
    featured: false,
    available: true,
    prepTime: 'aquecido',
  },
  {
    id: 'pao-queijo',
    name: 'Pão de Queijo Artesanal',
    categoryId: 'salgados',
    price: 10,
    shortDescription: 'Queijo da serra, forno a cada lote.',
    description:
      'Receita artesanal com queijo da serra. Assado em lotes pequenos para manter a crosta crocante e o interior elástico.',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80',
    tags: ['clássico'],
    featured: false,
    available: true,
    prepTime: 'aquecido',
  },
  {
    id: 'toast-abacate',
    name: 'Toast de Abacate',
    categoryId: 'salgados',
    price: 28,
    shortDescription: 'Pão de fermentação, abacate e ovos.',
    description:
      'Fatia generosa de pão de fermentação natural, abacate amassado, ovos pochê e sementes tostadas.',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80',
    tags: ['leve'],
    featured: true,
    available: true,
    prepTime: '10 min',
  },
  {
    id: 'brunch-maison',
    name: 'Brunch Maison',
    categoryId: 'brunch',
    price: 68,
    shortDescription: 'Seleção completa para dois momentos.',
    description:
      'Inclui filtrado ou cappuccino, croissant, ovos mexidos cremosos, frutas da estação e mini sobremesa do dia. Ideal para uma manhã sem pressa.',
    image:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1000&q=80',
    tags: ['completo', 'assinatura'],
    featured: true,
    available: true,
    prepTime: '15 min',
  },
  {
    id: 'bowl-acai',
    name: 'Bowl de Açaí & Granola',
    categoryId: 'brunch',
    price: 32,
    shortDescription: 'Açaí cremoso, granola e frutas.',
    description:
      'Açaí batido na medida, granola caseira, banana, morango e mel. Frescor e energia com apresentação cuidada.',
    image:
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1000&q=80',
    tags: ['leve'],
    featured: false,
    available: true,
    prepTime: '8 min',
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(categoryId) {
  return products.filter((product) => product.categoryId === categoryId)
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured && product.available)
}

export function searchProducts(query) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return products

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(normalized) ||
      product.shortDescription.toLowerCase().includes(normalized) ||
      product.tags.some((tag) => tag.includes(normalized)),
  )
}
