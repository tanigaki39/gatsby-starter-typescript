import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { AuthorsQuery } from '../../types/graphql-types'
// ______________________________________________________
//
type Props = {
  data: AuthorsQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => (
  <div>
    <h1>Authors</h1>
    {data.site?.siteMetadata?.authors?.map(
      (author) =>
        author?.slug && (
          <li key={author.slug}>
            <Link to={`/authors/${author.slug}`}>{author.name}</Link>
          </li>
        )
    )}
    <p>
      <Link to="/">Back to top page</Link>
    </p>
  </div>
)
// ______________________________________________________
//
export const pageQuery = graphql`
  query Authors {
    site {
      siteMetadata {
        authors {
          name
          slug
        }
      }
    }
  }
`
// ______________________________________________________
//
export default Component
