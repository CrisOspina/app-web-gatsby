import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function Cancelado() {
  return (
    <div>
      <SEO title="Compra fallida" />
      <Purchase>
        <h2>Compra fallida</h2>
        <p>Verifica nuevamente</p>
        <p>Hubo un error</p>
        <span role="img" aria-label="emoji">
          😭
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
