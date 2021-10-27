import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import topImg from "../assets/top-img.svg"

const BlogIndex = ({ data, location }) => {
  const top = (
    <>
      <div className="top-wrapper">
        <div className="top container">
          <div>
            <h1>Webデザイナーになる。</h1>
            <p>
              Webデザインって何？？絵心ないからできない...。
              <br />
              そんな心配は不要です。
              <br />
              本気のあなたにWebデザインのノウハウを授けます。
            </p>
          </div>
          <img src={topImg} alt="top" />
        </div>
        <svg
          width="1440"
          height="100"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 100H0L1440 0V100Z" fill="#4EBFA0" />
        </svg>
      </div>
      <section id="overview">
        <div className="container">
          <div className="title-content">
            <h1>デザインコースの概要</h1>
            <p>
              デザインコースではUI/UXデザイナーのロードマップに合わせて次のように学習を進めていきます。
              <br />
              ボタンを押してデザイナーに必要な資質、ロードマップの詳しい内容を見てみましょう。
            </p>
          </div>
          <div className="content-wrapper">
            <div className="overview-content">
              <div className="circle-wrapper">
                <svg viewBox="0 0 200 100">
                  <text className="background" x="0" y="87%">
                    1
                  </text>
                  <text className="foreground" x="0" y="87%">
                    1
                  </text>
                </svg>
                <div className="circle">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.6322 20.295L33.7022 22.365L13.3172 42.75H11.2472V40.68L31.6322 20.295ZM39.7322 6.75C39.1697 6.75 38.5847 6.975 38.1572 7.4025L34.0397 11.52L42.4772 19.9575L46.5947 15.84C47.4722 14.9625 47.4722 13.545 46.5947 12.6675L41.3297 7.4025C40.8797 6.9525 40.3172 6.75 39.7322 6.75ZM31.6322 13.9275L6.74722 38.8125V47.25H15.1847L40.0697 22.365L31.6322 13.9275Z"
                      fill="#4EBFA0"
                    />
                  </svg>
                  <span>UI Design</span>
                </div>
              </div>
              <p>
                デザインツールFigmaを用いてデザインとは何か、デザインの作り方を学びます。
              </p>
            </div>
            <div className="overview-content">
              <div className="circle-wrapper">
                <svg viewBox="0 0 200 100">
                  <text className="background" x="0" y="87%">
                    2
                  </text>
                  <text className="foreground" x="0" y="87%">
                    2
                  </text>
                </svg>
                <div className="circle">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45 41.625C47.475 41.625 49.4775 39.6 49.4775 37.125L49.5 12.375C49.5 9.9 47.475 7.875 45 7.875H9C6.525 7.875 4.5 9.9 4.5 12.375V37.125C4.5 39.6 6.525 41.625 9 41.625H0C0 44.1 2.025 46.125 4.5 46.125H49.5C51.975 46.125 54 44.1 54 41.625H45ZM9 12.375H45V37.125H9V12.375ZM27 43.875C25.7625 43.875 24.75 42.8625 24.75 41.625C24.75 40.3875 25.7625 39.375 27 39.375C28.2375 39.375 29.25 40.3875 29.25 41.625C29.25 42.8625 28.2375 43.875 27 43.875Z"
                      fill="#4EBFA0"
                    />
                  </svg>
                  <span>Prototyping</span>
                </div>
              </div>
              <p>
                作ったデザインがユーザーの操作などによってどう動くのかFigmaで表現しましょう。
              </p>
            </div>
            <div className="overview-content">
              <div className="circle-wrapper">
                <svg viewBox="0 0 200 100">
                  <text className="background" x="0" y="87%">
                    3
                  </text>
                  <text className="foreground" x="0" y="87%">
                    3
                  </text>
                </svg>
                <div className="circle">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.75 11.25V15.75H33.75V11.25H42.75ZM20.25 11.25V24.75H11.25V11.25H20.25ZM42.75 29.25V42.75H33.75V29.25H42.75ZM20.25 38.25V42.75H11.25V38.25H20.25ZM47.25 6.75H29.25V20.25H47.25V6.75ZM24.75 6.75H6.75V29.25H24.75V6.75ZM47.25 24.75H29.25V47.25H47.25V24.75ZM24.75 33.75H6.75V47.25H24.75V33.75Z"
                      fill="#4EBFA0"
                    />
                  </svg>
                  <span>Wireframing</span>
                </div>
              </div>
              <p>
                WEBページの設計図と呼ばれるワイヤーフレームの作り方を学びましょう。
              </p>
            </div>
            <div className="overview-content">
              <div className="circle-wrapper">
                <svg viewBox="0 0 200 100">
                  <text className="background" x="0" y="87%">
                    4
                  </text>
                  <text className="foreground" x="0" y="87%">
                    4
                  </text>
                </svg>
                <div className="circle">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5775 29.25C22.815 29.25 23.8275 30.2625 23.8275 31.5C23.8275 32.7375 22.815 33.75 21.5775 33.75C20.34 33.75 19.3275 32.7375 19.3275 31.5C19.3275 30.2625 20.34 29.25 21.5775 29.25ZM21.5775 24.75C17.8425 24.75 14.8275 27.765 14.8275 31.5C14.8275 35.235 17.8425 38.25 21.5775 38.25C25.3125 38.25 28.3275 35.235 28.3275 31.5C28.3275 27.765 25.3125 24.75 21.5775 24.75ZM40.7025 20.25L43.155 14.8275L48.5775 12.375L43.155 9.9225L40.7025 4.5L38.25 9.9225L32.8275 12.375L38.25 14.8275L40.7025 20.25ZM46.9575 28.62L45.2025 24.75L43.4475 28.62L39.5775 30.375L43.4475 32.13L45.2025 36L46.9575 32.13L50.8275 30.375L46.9575 28.62ZM35.64 31.5C35.64 31.23 35.64 30.9375 35.6175 30.6675L39.9825 27.36L34.3575 17.6175L29.3175 19.7325C28.8675 19.44 28.3725 19.1475 27.8775 18.9L27.2025 13.5H15.9525L15.2775 18.9225C14.7825 19.17 14.31 19.4625 13.8375 19.755L8.79747 17.6175L3.17247 27.36L7.53747 30.6675C7.51497 30.9375 7.51497 31.23 7.51497 31.5C7.51497 31.77 7.51497 32.0625 7.53747 32.3325L3.17247 35.64L8.79747 45.3825L13.8375 43.2675C14.2875 43.56 14.7825 43.8525 15.2775 44.1L15.9525 49.5H27.2025L27.8775 44.0775C28.3725 43.83 28.845 43.56 29.3175 43.245L34.3575 45.36L39.9825 35.6175L35.6175 32.31C35.64 32.0625 35.64 31.77 35.64 31.5ZM32.445 39.69L28.5525 38.0475C27.2925 39.3975 25.6275 40.3875 23.76 40.815L23.22 45H19.935L19.4175 40.815C17.55 40.3875 15.885 39.3975 14.625 38.0475L10.7325 39.69L9.08997 36.8325L12.4425 34.29C12.1725 33.4125 12.0375 32.49 12.0375 31.5225C12.0375 30.555 12.1725 29.6325 12.4425 28.755L9.08997 26.2125L10.7325 23.355L14.625 24.9975C15.885 23.6475 17.55 22.6575 19.4175 22.23L19.935 18H23.2425L23.76 22.185C25.6275 22.6125 27.2925 23.6025 28.5525 24.9525L32.445 23.31L34.0875 26.1675L30.735 28.71C31.005 29.5875 31.14 30.51 31.14 31.4775C31.14 32.445 31.005 33.3675 30.735 34.245L34.0875 36.7875L32.445 39.69Z"
                      fill="#4EBFA0"
                    />
                  </svg>
                  <span>Design System</span>
                </div>
              </div>
              <p>
                デザインの管理次第でエンジニアの実装スピードは遅くも早くもなります。
              </p>
            </div>
          </div>
          <div className="text-right">
            <a
              href="https://bootcamp.uxdesign.cc/the-self-taught-ui-ux-designer-roadmap-in-2021-aa0f5b62cecb?"
              target="_blank"
              rel="noreferrer"
              className="link-button"
            >
              Designer's Road Map 2021
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
            </a>
          </div>
        </div>
      </section>
      <svg
        width="1440"
        height="100"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H1440L0 100V0Z" fill="#4EBFA0" />
      </svg>
    </>
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
          labels
        }
      }
    }
  }
`
