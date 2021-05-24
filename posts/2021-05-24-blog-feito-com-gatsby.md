---
date: 2021-05-22 00:56
title: Saiba como construí um blog PWA utilizando Gatsby
description: Gatsby é incrível e posso te provar.
category: DEV
background: "#2DA0C3"
---
Um Blog PWA significa que ele funciona offline. Uma vez que o usuário carregue o site, ele irá funcionar mesmo sem internet, pois todas as informações já foram servidas pela CDN. 

Quer fazer um teste?
Desconecte-se e navegue tranquilamente nesse blog.

# Tecnologias 
  Veja as dependências do projeto:
```
"dependencies": {
    "@hapi/bourne": "^1.3.2",
    "@hapi/topo": "^3.1.6",
    "algoliasearch": "^3.35.1",
    "chokidar": "^3.5.1",
    "core-js": "^3.12.1",
    "dotenv": "^8.1.0",
    "gatsby": "^3.2.1",
    "gatsby-plugin-algolia-search": "^0.5.0",
    "gatsby-plugin-disqus": "^1.2.2",
    "gatsby-plugin-gatsby-cloud": "^2.2.0",
    "gatsby-plugin-google-analytics": "^3.4.0",
    "gatsby-plugin-image": "^1.1.1",
    "gatsby-plugin-manifest": "^3.2.0",
    "gatsby-plugin-netlify-cms": "^5.4.1",
    "gatsby-plugin-offline": "^4.2.0",
    "gatsby-plugin-react-helmet": "^4.2.0",
    "gatsby-plugin-sharp": "^3.3.1",
    "gatsby-plugin-sitemap": "^4.1.0",
    "gatsby-plugin-social9-socialshare": "^1.0.5",
    "gatsby-plugin-styled-components": "^4.3.0",
    "gatsby-plugin-transition-link": "^1.20.5",
    "gatsby-remark-images": "^5.0.0",
    "gatsby-remark-lazy-load": "^1.0.2",
    "gatsby-remark-prismjs": "^5.0.0",
    "gatsby-remark-relative-images-v2": "^0.1.5",
    "gatsby-source-filesystem": "^3.3.0",
    "gatsby-transformer-remark": "^4.0.0",
    "gatsby-transformer-sharp": "^3.3.0",
    "git": "^0.1.3",
    "gsap": "^3.6.1",
    "joi": "^17.4.0",
    "lazysizes": "^5.3.2",
    "netlify-cms-app": "^2.15.2",
    "npm-git-install": "^0.3.0",
    "prismjs": "^1.23.0",
    "prop-types": "^15.7.2",
    "react": "^16.14.0",
    "react-disqus-comments": "^1.4.0",
    "react-dom": "^16.14.0",
    "react-ga": "^3.3.0",
    "react-helmet": "^6.1.0",
    "react-instantsearch-dom": "^6.10.3",
    "styled-components": "^4.1.3",
    "styled-icons": "^10.33.0",
    "styled-media-query": "^2.1.2"
  },

```
Com uma olhada mais atenta nos plugins instalados, você consegue perceber como o ecossistema do Gatsby é rico. Isso facilita muito nosso trabalho.

# Mas afinal de contas, o que é Gatsby?

Gatsby é uma estrutura de código aberto baseada no React para a criação de sites e aplicativos. Você pode construir qualquer coisa que você possa imaginar utilizando Gatsby. 

São mais de 2000 plug-ins que trazem desempenho, escalabilidade e segurança integrados por padrão em um projeto Gatsby.

Tratando agora mais especificamente desse blog, resumidamente, o Gatsby faz a criação de páginas estáticas. O que é perfeito para projetos que não possuem muitas páginas e muitas interações distintas entre usuários. 

Em junção com GraphQl, você tem nas mãos uma combinação poderosa.

# GraphQL: Uma tecnologia desenvolvida pelo Facebook

GraphQL é uma linguagem de consulta para APIs, que possibilita reduzir o tempo de execução para atender a essas consultas com seus dados existentes. 

O GraphQL fornece uma descrição completa e compreensível dos dados em sua API, dá aos clientes o poder de pedir exatamente o que precisam e nada mais, torna mais fácil evoluir APIs ao longo do tempo. 

Essa é uma tecnologia desenvolvida pelo Facebook. A gigante das redes sociais sofria muito com gerenciamento de dados. Antes do GraphQL, cada requisição exigia muitos recursos.

Imagine que um usuário faz um comentário, e um outro usuário responde. 

A antiga API do Facebook pedia uma pilha de dados totalmente desnecessários para executar aquela requisição em especifíco.  

Veja abaixo como utilizei o GraphQL nesse blog para buscar somente os dados que são relevantes para o que euu  quero:

```
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
   {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          background
          category
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
          image
        }
        timeToRead
      }
      next {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
      previous {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}

```
Basicamente o que estou fazendo aí é utilizando o metódo de criação de páginas do Gatsby `createPages` para gerar minha HomePage buscando os dados através do GraphQl usando o metódo `allMarkdownRemark`.

Uma solução simples, elegante e 100% funcional!

Ainda nesse papo sobre dados, você PRECISA conhecer o Algolia. E é próxima tecnologia de que vamos tratar.

# Algolia: Tenha Search gratuita em seu site

O Algolia é um mecanismo de pesquisa hospedado, que oferece pesquisa em texto completo, numérica e facetada, capaz de fornecer resultados em tempo real desde o primeiro toque de tecla. 

A poderosa API do Algolia permite que você implemente de forma rápida e perfeita a pesquisa em sites e aplicativos móveis, entregando resultados relevantes <strong>em menos de 100ms<strong> em qualquer lugar do mundo.

Veja como integrei o Algolia aqui nesse blog:

```
import React from "react"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"
import * as S from "./styled"


const Search = ({ algolia }) => {
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <Hits hitComponent={Hit} />

      </InstantSearch>


    </S.SearchWrapper>
  )
}

export default Search
```
Agora vamos tratar do Netlify e do Netlify CMS.

# Netlify & Netlify CMS: Hospede e gerencie seus sites gratuitamente

Antes de tudo, entenda que o Netlify e o Netlify CMS são serviços diferentes. 
Basicamente, o Netlify se conecta com sua conta Git e sobe código para a plataforma e hospeda seu site gratuitamente. 
O Netlify CMS serve para que você possa gerenciar e escrever os seus posts de uma maneira mais simples. 

Esse post foi escrito com Markdown, por motivos de que Markdown é legal, hahaha, mas poderia ter sido escrito no Netlify CMS de forma muito simples. Eu só precisaria fazer o build do Blog e pronto, abriria meu gerenciador e escreveria. 

Para fazer funcionar é preciso instalar o plugin `gatsby-plugin-netlify-cms` e ter um arquivo `config.yml.`

Veja abaixo um exemplo de config.yml

``` 
backend:
  name: github
  repo: seugit/nomedorepositório
  branch: main
  site_domain: seusite.com.br

publish_mode: editorial_workflow
media_folder: "dir/dir/file"
public_folder: "dir/file"

collections:
  - name: "posts" # Used in routes, e.g., /admin/collections/blog
    label: "Posts" # Used in the UI
    folder: "posts" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Description", name: "description", widget: "string" }
      - {
          label: "Date",
          name: "date",
          widget: "datetime",
          format: "YYYY-MM-DD hh:mm:ss",
        }
      - { label: "image", name: "image", widget: "image" }
      - {
        label: "Category",
        name: "category",
        widget: "select",
        options: ["jekyll", "css", "js", "html", "svg", "dev", "misc"]
      }
      - {
        label: "Background",
        name: "background",
        widget: "select",
        options: [
          { label: "Jekyll", value: "#B31917" },
          { label: 'CSS', value: '#2DA0C3' },
          { label: 'JS', value: '#D6BA32' },
          { label: 'HTML', value: '#EB7728' },
          { label: 'SVG', value: '#7D669E' },
          { label: 'Dev', value: '#637a91' },
          { label: 'Misc', value: '#7AAB13' },
        ]
      }
      - { label: "Body", name: "body", widget: "markdown" }
```
O que está acontecendo aí é muito simples. Eu informo onde o CMS deve buscar os dados, no caso no meu repositório no Github, indico o caminho para meus arquivos e depois especifico quais dados ele deve buscar. 

Muita atenção com o config,yml, pois um simples erro vai te sugar horas infernais para reeditar esse arquivo até fazer funcionar.

# Conclusão

Essa é a base sólida desse projeto, mas como você pode ver na relação de plugins das dependências, ainda tem muito mais para ser abordado em próximos posts. 

Até a próxima!