# Graph Report - ..\Mad\packaging-industrial\src  (2026-05-08)

## Corpus Check
- 15 files · ~8,513 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 34 nodes · 54 edges · 8 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]

## God Nodes (most connected - your core abstractions)
1. `useCart()` - 9 edges
2. `products` - 3 edges
3. `mainCategories` - 3 edges
4. `Cart()` - 2 edges
5. `ProductCard()` - 2 edges
6. `CartProvider()` - 2 edges
7. `AddToCartButton()` - 2 edges
8. `Contacto()` - 2 edges
9. `CartContext` - 1 edges

## Surprising Connections (you probably didn't know these)
- `AddToCartButton()` --calls--> `useCart()`  [EXTRACTED]
  pages/Catalogo.jsx → context/CartContext.jsx
- `Cart()` --calls--> `useCart()`  [EXTRACTED]
  components/Cart.jsx → context/CartContext.jsx
- `ProductCard()` --calls--> `useCart()`  [EXTRACTED]
  components/ProductCard.jsx → context/CartContext.jsx
- `Contacto()` --calls--> `useCart()`  [EXTRACTED]
  pages/Contacto.jsx → context/CartContext.jsx

## Communities (8 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.33
Nodes (6): Cart(), ProductCard(), CartContext, CartProvider(), useCart(), Contacto()

### Community 1 - "Community 1"
Cohesion: 0.39
Nodes (3): mainCategories, products, AddToCartButton()

## Knowledge Gaps
- **1 isolated node(s):** `CartContext`
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useCart()` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **What connects `CartContext` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._