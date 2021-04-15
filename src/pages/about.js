import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
      <h1>About Page</h1>
     <ul>
      <li>
        <Link to="/" activeStyle={{color: 'red'}}>Home</Link>
      </li>
     </ul>
    </Layout>
)

    

export default AboutPage