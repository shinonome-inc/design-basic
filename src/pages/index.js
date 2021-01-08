import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Device from "../assets/device.png"

const BlogIndex = ({ data, location }) => {
  const top = (
    <div className="top-wrapper">
      <div className="top">
        <h1>Design is intelligence made visible. </h1>
        <img src={Device} />
      </div>
    </div>
  )
  return (
    <Layout location={location} data={data} top={top}>
      <SEO title="Design Basic" />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`
