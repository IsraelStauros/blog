import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <h1>Title: {post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
       
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
