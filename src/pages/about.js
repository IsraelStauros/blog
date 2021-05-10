import React from "react"

import Layout from "../components/Layout/"
import Seo from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <Seo
      title="Sobre mim"
      description="Quem sou?."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Israel, sou de Salvador-Ba e estudante de Web Desenvolvimento.

      </p>


      <h2>Contato</h2>

      <p>
        blá, blá, blá
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
