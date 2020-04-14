import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts/index'
import { IndexPageQuery } from '../../types/graphql-types'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: IndexPageQuery
}

const Component: React.FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <div>
      <h1>Hi people</h1>
      <p>
        Welcome to your new <strong>{data.site.siteMetadata.title}</strong>{' '}
        site.
      </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <p>
        <Link to="/authors/">Go to authors</Link>
      </p>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Component
