import React from "react"

import Layout from "../components/Layout/"
import Seo from "../components/seo"
import SocialLinks from "../components/SocialLinks"


import { MainContent } from "../styles/base"

const LandingPage = () => (
  <Layout>
    <Seo
    title = "Tenha seu site na internet em pouco tempo"
    description= "Entenda como você pode alavancar suas vendas"
    />
    <MainContent>
      <h1>Tenha seu site na internet em pouco tempo</h1>

      <h2>Entenda como um site pode alavancar suas vendas</h2>


      <p>
      A internet é uma grande vitrine!
      Bilhões de consumidores passam boa parte do seu tempo na web todo santo dia.

      </p>

    </MainContent>

    <SocialLinks hideStyle />
  </Layout>
)

export default LandingPage
