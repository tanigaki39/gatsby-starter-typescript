import * as React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'

const DefaultLayout: React.FC = (props) => (
  <div>
    <Helmet title="自分のやつ" />
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

export default DefaultLayout
