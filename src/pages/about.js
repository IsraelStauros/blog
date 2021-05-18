import React from "react"

import Layout from "../components/Layout/"
import Seo from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import { StaticImage } from "gatsby-plugin-image"
import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <Seo
      title="Sobre mim"
      description="Página que conta um pouco da história do autor desse blog"
    />
    <MainContent>
      <h1>O Developer</h1>
      <StaticImage
          src="../images/foto-de-perfil.jpg"
          alt="Foto do autor do blog"
          placeholder="blurred" 
          
        />
      <p>
        E aí, blz?! Meu nome é Israel e sou o cara por trás desse blog.
      </p>

      <p>
      É bom ter você por aqui! 
      </p>

      <p> 
        Esse é um blog construído com Gatsby, 
        GraphQl, JavaScript e outras cositas. 
      </p>

      <p>
        Também estou utilizando um dominío grátis da freenom,
        hospedagem grátis da Netlify e integrei gratuitamente ao Netlify CMS,
        por onde posso escrever os posts de maneira mais descomplicada. 
      </p>

      <p>
      Isso mesmo, custo <strong>ZERO</strong>!
      Saber programar tem lá suas vantagens...
      </p>
      
      
      <p>
        Entrei no mundo da programação meio que por acaso. Inicialmente eu apenas precisava de um site para um empreendimento 
        bem especifíco que eu havia no iniciado no markerting digital, e como tem coisas que eu mesmo gosto de fazer, 
        fui atrás de aprender como utilizar o wordpress para criar o site de que precisava. 
      </p>

      <p>
        Todos os dias eu assistia um tutorial sobre alguma relacionada a criação de sites.
        Quando me dei conta, os algoritimos do facebook e do youtube começaram a recomendar 
        conteúdos cada vez mais relacionados com programação.
        Você, caro leitor, já deve ter percebido onde isso veio parar.
      </p>

      <p>
        Gostei tanto dos conteúdos sugeridos, que comecei estudar programação como hobby e em pouco tempo, o que era apenas uma distração, 
        se transformou em uma aspiração genuína de ingressar nesse mundo do desenvolvimento web de forma profissional.  
      </p>

      <p>
        Esse blog mesmo surgiu como um projeto realizado durante um curso sobre gatsby, e agora virou meu blog pessoal. 
        Aqui eu compartilho várias coisas que tenho aprendido e estudado, com o intuito de ajudar o máximo de pessoas
        que eu puder.
      </p>

      <p>
        Além de programação, ainda me interesso bastante por marketing, e acho que seja uma ferramenta 
        fundamental para uma comunicação eficiente.
        Tenho uma boa base de copy e gestão de trafégo.  
      </p> 

      <p>
        Entender um pouco de marketing me parece ser um diferencial 
        bem bacana para o currículo de um desenvolvedor que oferece por o negócio de alguém na internet,
        onde a competição por visibilidade é bastante acirrada.
      </p>

      <p>
        Também gosto de história, filosofia, religião comparada, astrologia e astronomia. 
        No meu tempo livre, além de aprender sobre programação, também me dedico á leitura desses assuntos.
      </p>

      <p>
        Meu foco atual é o de oferecer soluções rápidas e eficientes para micro, pequenos e médios empreendedores 
        que queiram digitalizar seus empreendimentos. 
      </p>
      
      <p>
        Sou um grande defensor da idéia de resolver problemas da maneira mais rápida e eficiente possível.
        Por isso, apesar de gostar muito de passar dias e dias trabalhando em um código, entendo que soluções 
        "Low Code" ou "No Code" também têm seu espaço no mercado e podem trazer resultados rápidos e de extrema qualidade
        em diversos projetos. 
      </p>

      <p>
        Então tento ser o mais prático possível na resolução de problemas e não sou do tipo de 
        programador que fica empurrando soluções complexas para questões que podem ser resolvidas de
        maneira simples, com ferramentas mais descomplicadas. Viva o WordPress!
      </p>
        

      <p>
        É isso! E agora, no que eu posso te ajudar?
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
