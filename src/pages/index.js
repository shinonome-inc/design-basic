import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Device from "../assets/device.svg"

const BlogIndex = ({ data, location }) => {
  const top = (
    <div className="top-wrapper">
      <div className="top">
        <h1>デザインとは知性の可視化である。</h1>
        <div className="content">
          <p>Design is intelligence made visible. by Alina Wheeler</p>
          <img src={Device} />
        </div>
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
