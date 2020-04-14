import * as React from 'react'
import Link from 'gatsby-link'
// ______________________________________________________
//
const SecondPage: React.FC = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)
// ______________________________________________________
//
export default SecondPage
