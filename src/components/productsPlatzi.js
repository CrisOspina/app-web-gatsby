import React from 'react'
import { Link } from 'gatsby'
import formatPrice from '../utils/priceFormat'
import { StyledProducts } from '../styles/components'

export default function ProductsPlatzi({ products }) {
  return (
    <StyledProducts>
      <h2>Products</h2>
      <section>
        {products.map(({ node }) => {
          const price = formatPrice(node.price)
          return (
            <article key={node.id}>
              <img src={node.product.metadata.img} alt={node.product.name} />
              <p>{node.product.name}</p>
              <small>USD {price}</small>
              <Link to={`/${node.id}`}>
                Comprar ahora <span>→</span>
              </Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
