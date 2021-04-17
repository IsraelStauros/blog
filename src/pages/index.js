import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem
    slug="/about/"
    background="#000000"
    category="Misc"
    date="17/04/2021"
    timeToRead="5"
    title="Já Passou da hora de por seu negócio online"
    description="E se você está lendo isso, é por que já percebeu"
    />
  </Layout>
)

export default IndexPage
