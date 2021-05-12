import React from "react"

import Layout from "../components/Layout/"
import Seo from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <MainContent>

    <h1>404: Ops... Página não encontrada</h1>

    <h2>Algo deu errado!</h2>

    <p>A página não existe ou a URL foi digitada de forma errada. Retorne ao {' '}
    <a
          href="https://staurosdevelopment.tk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
    </a>
    </p>

    <SocialLinks hideStyle />

    </MainContent>
  </Layout>
)

export default NotFoundPage
