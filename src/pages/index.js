import * as React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home</h1>
    <ul>
      <li>
        <Link to="/about" activeStyle={{color: 'red'}}>About Page</Link>
      </li> 
    </ul>
  </Layout>
)

export default IndexPage
