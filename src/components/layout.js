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
              labels
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
  let number = 0
  let aside = (
    <div className="aside-list">
      <div>
        <h2>課題一覧</h2>
        <aside>
          <ol className="aside-inner">
            {posts.map((post, index) => {
              if (post.frontmatter.labels[0] !== "wisdom") {
                const title = post.frontmatter.title || post.fields.slug
                number += 1
                let prevPostLabel =
                  index > 0 ? posts[index - 1].frontmatter.labels[0] : undefined
                let currentPostLabel = posts[index].frontmatter.labels[0]
                return (
                  <>
                    {prevPostLabel !== currentPostLabel && (
                      <div className="post-label">{currentPostLabel}</div>
                    )}
                    <li key={post.fields.slug}>
                      <Link
                        to={post.fields.slug}
                        itemProp="url"
                        className={
                          post.frontmatter.labels[1] === "test" && "test"
                        }
                      >
                        {`${number}. ${title} `}
                      </Link>
                    </li>
                  </>
                )
              }
              return false
            })}
          </ol>
        </aside>
      </div>
      <div>
        <h2>その他</h2>
        <aside>
          <ol className="aside-inner">
            {posts.map(post => {
              if (post.frontmatter.labels[0] === "wisdom") {
                const title = post.frontmatter.title || post.fields.slug
                return (
                  <li key={post.fields.slug}>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </li>
                )
              }
              return false
            })}
          </ol>
        </aside>
      </div>
    </div>
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
        <div className="content">
          <h1>さあ、始めましょう</h1>
          <p>
            デザインコースではたくさんの課題があります。コースを修了するにはやり通す覚悟と粘り強さが求められます。
            <br />
            諦めずに丁寧に取り組みましょう。
          </p>
        </div>
        {aside}
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
        <main>
          {children}
          {isRootPath && content}
        </main>
      </div>
      {nav && nav}
      <footer>© {new Date().getFullYear()} Shinonome, inc.</footer>
    </div>
  )
}

export default Layout
