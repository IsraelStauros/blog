import React from "react"

import Layout from "../components/Layout/"
import Seo from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <Seo
      title="Sobre mim"
      description="Quem sou"
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        E aí, blz?! Meu nome é Israel e sou o cara por trás desse blog. 
        Esse é um blog com dominío grátis da freenom, construído com Gatsby, 
        GraphQl, javascript e outras cositas. Hospedado gratuitamente na Netlify e integrado ao Netlify CMS por onde posso escrever os posts de maneira mais descomplicada. 
        É bom ter você por aqui! 

      </p>
      <p>
        Entrei no mundo da programação meio que por acaso. Inicialmente eu apenas precisava de um site para um empreendimento 
        bem especifíco que eu havia no iniciado no markerting digital, e como tem coisas que eu mesmo gosto de fazer, 
        fui atrás de aprender como utilizar o wordpress para criar o site de que precisava. 
        Todos os dias eu assistia um tutorial sobre alguma relacionada a criação de sites.
        Quando me dei conta, os algoritimos do facebook e do youtube começaram a recomendar conteúdos cada vez mais relacionados com programação.
      </p>

      <p>
        Você, caro leitor, já deve ter percebido onde isso veio parar, kkkk. 
        Gostei tanto dos conteúdos sugeridos, que comecei estudar programação como hobby e em pouco tempo, o que era apenas uma distração, 
        se transformou em uma aspiração genuína de ingressar nesse mundo do desenvolvimento web de forma profissional. 
        Esse blog mesmo surgiu como um projeto realizado durante um curso sobre gatsby, e agora virou meu blog pessoal. 
        Aqui eu compartilho várias coisas que tenho aprendido e estudado. 
      </p>

      <p>
        Além de programação, ainda me interesso bastante por marketing, e acho que seja uma ferramenta fundamental para uma comunicação eficiente.
        Tenho uma boa base de copy e gestão de trafégo. 
        Entender um pouco de marketing me parece ser um diferencial 
        bem bacana para o currículo de um desenvolvedor que oferece por o negócio de alguém na web.
        Também gosto de história, filosofia, religião comparada, astrologia e astronomia. 
        No meu tempo livre, além de aprender sobre programação, também me dedico á leitura desses assuntos. 
      </p> 

      <p>
        Meu foco atual é o de oferecer soluções rápidas e eficientes para micro, pequenos e médios empreendedores que queiram
        por seu negócio na web. Em geral, o WordPress tem sido uma excelente ferramenta, pois permite ao cliente uma gerencia
        mais independente após a entrega do site. Não necessitando contratar um programador cada vez que queira modificiar algo. 
        Mas também ofereço soluções mais personalizadas para empreendedores que nessecitam de algo mais robusto.
      </p>

      <h2>Contato</h2>

      <p>
        Você pode me encontrar em qualquer uma das redes sociais listadas aqui.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
