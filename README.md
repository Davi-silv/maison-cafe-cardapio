# Maison Café — Coffee & Experience

Cardápio digital premium demonstrativo da **Evolutiva Tech** para cafeterias.

## Stack

- React.js + Vite
- Tailwind CSS v4
- React Router DOM
- Framer Motion
- Lucide React
- Context API + LocalStorage

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Estrutura preparada para backend

- `src/data/` — catálogo e dados institucionais fictícios
- `src/services/catalog.js` — camada de acesso pronta para trocar por PHP/Supabase
- Carrinho persistido em `localStorage` (`maison-cafe-cart`)

## Rotas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/cardapio` | Cardápio com filtros e busca |
| `/produto/:id` | Detalhe do produto |
| `/carrinho` | Carrinho + checkout WhatsApp |
| `/sobre` | Sobre a cafeteria |
