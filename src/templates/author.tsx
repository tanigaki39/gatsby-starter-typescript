import * as React from 'react'
import { AuthorPageContext } from '../../gatsby-node/createAuthorPages'
import { Link } from 'gatsby'
// ______________________________________________________
//
type Props = {
  pageContext: AuthorPageContext
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => (
  <div>
    <h1>Author</h1>
    <p>Hi! My name is {pageContext.author.name}</p>
    <p>
      <Link to="/authors/">Back to authors</Link>
    </p>
    <p>
      <Link to="/">Back to top page</Link>
    </p>
  </div>
)
// ______________________________________________________
//
export default Component
