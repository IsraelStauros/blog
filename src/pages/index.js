import * as React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem />
    <ul>
      <li>
        <Link to="/about" activeStyle={{color: 'red'}}>About Page</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
