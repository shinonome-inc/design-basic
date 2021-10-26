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
              description
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
  let postIndex = 0
  let aside = (
    <section className="aside-list container">
      <div className="card-list">
        {posts.map(post => {
          if (post.frontmatter.labels[0] === "wisdom") {
            const title = post.frontmatter.title || post.fields.slug
            let cardType = post.fields.slug.replace("/wisdom/", "")
            cardType = cardType.replace("/", "") + " card-img"
            return (
              <Link
                to={post.fields.slug}
                itemProp="url"
                className="card"
                key={post.fields.slug}
              >
                <div className={cardType}>
                  <span></span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{post.frontmatter.description}</p>
                </div>
              </Link>
            )
          }
          return false
        })}
      </div>
      <div className="title-content">
        <h1>さあ、始めましょう</h1>
        <p>
          デザインコースではたくさんの課題があります。コースを修了するにはやり通す覚悟と粘り強さが求められます。
          <br />
          上から順番に丁寧に取り組みましょう。
        </p>
      </div>
      <div className="accordion" id="accordion">
        {posts.map((post, index) => {
          if (post.frontmatter.labels[0] !== "wisdom") {
            const title = post.frontmatter.title || post.fields.slug
            const editTitle = title.replace(/\(([^)]+)\)/, "")
            let buttonClass
            let collapseClass
            postIndex += 1
            if (postIndex === 1) {
              buttonClass = "btn btn-link"
              collapseClass = "collapse show"
            } else {
              buttonClass = "btn btn-link collapsed"
              collapseClass = "collapse"
            }
            const areaLabel = "heading" + postIndex
            const areaControl = "collapse" + postIndex
            const dataTarget = "#collapse" + postIndex
            return (
              <div className="card" key={index}>
                <div className="card-header" id={areaLabel}>
                  <button
                    className={buttonClass}
                    type="button"
                    data-toggle="collapse"
                    data-target={dataTarget}
                    aria-expanded="true"
                    aria-controls={areaControl}
                  >
                    <h5 className="mb-0">
                      {postIndex}. {editTitle}
                    </h5>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4 17L21.2418 26.1184C21.6408 26.5823 22.3592 26.5823 22.7582 26.1184L30.6 17"
                        stroke="#868686"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id={areaControl}
                  className={collapseClass}
                  aria-labelledby={areaLabel}
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div className="content">
                      <div className="labels">
                        {post.frontmatter.labels.map(l => (
                          <div className="post-label" key={l}>
                            {l}
                          </div>
                        ))}
                      </div>
                      <p>{post.excerpt}</p>
                    </div>
                    <div className="info">
                      <Link
                        to={post.fields.slug}
                        itemProp="url"
                        className="link-button"
                      >
                        チャレンジする
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12ZM4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12ZM16 12L12 16L10.59 14.59L12.17 13H8V11H12.17L10.58 9.41L12 8L16 12Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          return false
        })}
      </div>
    </section>
  )

  if (isRootPath) {
    header = (
      <header className="global-header index">
        <Link to="/">
          <img className="logo" src={DesignTitle} alt="test" />
        </Link>
      </header>
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
          {isRootPath && aside}
        </main>
      </div>
      {nav && nav}
      <footer>© {new Date().getFullYear()} Shinonome, inc.</footer>
    </div>
  )
}

export default Layout
