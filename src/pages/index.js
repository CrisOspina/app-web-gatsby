import React from 'react'
import { graphql } from 'gatsby'
import { SEO, Jumbo, ProductsPlatzi } from '../components'

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }

    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              description
              img
              wear
              color
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { description } = data.allSite.edges[0].node.siteMetadata
  const { edges } = data.allStripeSku

  return (
    <>
      <SEO title="Home" />
      <Jumbo description={description} />
      <ProductsPlatzi products={edges} />
    </>
  )
}

export default IndexPage
