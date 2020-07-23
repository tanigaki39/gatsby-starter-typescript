import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { AuthorsQuery } from '../../types/graphql-types'
// ______________________________________________________
//
const Component: React.FC = () => {
  const data: AuthorsQuery = useStaticQuery(graphql`
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
  `)

  return (
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
}
// ______________________________________________________
//
export default Component
