import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import DesignTitle from "../assets/design-title.svg"

import DesignTitleSmall from "../assets/design-title-small.svg"

const Layout = ({ location, children, nav, top }) => {
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
  let content
  let aside = (
    <aside>
      <p>課題一覧</p>
      <ol style={{ listStyle: `none` }} className="aside-inner">
        {posts.map((post, index) => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <>
              <li key={post.fields.slug} style={{ margin: `16px 0` }}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <p>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{`${
                        index + 1
                      }. ${title}`}</span>
                    </Link>
                  </p>
                </article>
              </li>
              <hr />
            </>
          )
        })}
      </ol>
    </aside>
  )

  if (isRootPath) {
    header = (
      <header className="global-header index">
        <Link to="/">
          <img className="logo" src={DesignTitle} alt="test" />
        </Link>
      </header>
    )

    content = (
      <>
        <section id="task">
          <div className="content">
            <h1>さあ、始めましょう</h1>
            <p>
              デザインコースではたくさんの課題があります。コースを修了するにはやり通す覚悟と粘り強さが求められます。
              <br />
              諦めずに丁寧に取り組みましょう。
            </p>
          </div>
          {aside}
        </section>
      </>
    )
  } else {
    header = (
      <header className="global-header">
        <Link className="header-link-home" to="/">
          <img className="logo" src={DesignTitleSmall} alt="test" />
        </Link>
      </header>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {header}
      {top && top}
      <div className="main-wrapper">
        <main>{children}</main>
        {!isRootPath && aside}
      </div>
      {isRootPath && content}
      {nav && nav}
      <footer>© {new Date().getFullYear()} Shinonome, inc.</footer>
    </div>
  )
}

export default Layout
