import * as React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
// ______________________________________________________
//
const Component: React.FC = (props) => (
  <div>
    <Helmet
      title="Default title"
      meta={[{ name: 'description', content: 'Default description' }]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {props.children}
    </div>
  </div>
)
// ______________________________________________________
//
export default Component
