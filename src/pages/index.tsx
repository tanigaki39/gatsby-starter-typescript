import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../layouts/index'
import { IndexPageQuery } from '../../types/graphql-types'
// ______________________________________________________
//
const Component: React.FC = () => {
  const data: IndexPageQuery = useStaticQuery(graphql`
    query IndexPage {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <h1>Hi people</h1>
        <p>
          Welcome to your new <strong>{data.site?.siteMetadata?.title}</strong>{' '}
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
}
// ______________________________________________________
//
export default Component
