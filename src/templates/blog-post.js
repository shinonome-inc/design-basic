import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  const nav = (
    <nav className="blog-post-nav">
      <hr />
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link
              to={previous.fields.slug}
              rel="prev"
              className="nav-link prev"
            >
              ← <span>{previous.frontmatter.title}</span>
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next" className="nav-link next">
              <span>{next.frontmatter.title}</span> →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )

  return (
    <Layout location={location} data={data} nav={nav}>
      <SEO title="Design Basic" />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" className="title">
            {post.frontmatter.title}
          </h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        labels
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        labels
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        labels
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
          labels
        }
      }
    }
  }
`
