import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import DesignTitle from "../assets/design-title.svg"

import DesignTitleSmall from "../assets/design-title-small.svg"

const Layout = ({ location, children, nav }) => {
  const data = useStaticQuery(
    graphql`
      query {
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
  )
  const posts = data.allMarkdownRemark.nodes
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Link to="/">
        <img className="logo" src={DesignTitle} alt="test" />
      </Link>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        <img className="logo" src={DesignTitleSmall} alt="test" />
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <div className="main-wrapper">
        <main>{children}</main>
        <aside>
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <h5>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h5>
                  </article>
                </li>
              )
            })}
          </ol>
        </aside>
      </div>
      {nav && nav}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
