import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function Home({ data }) {
    console.log(data)
    return (
        <Layout>
            <h1
                css={css`
                display: inline-block;
                border-bottom: 1px solid
            `}
            >Amazing Pandas Eating Things
            </h1>
            <div>
                <img
                    src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
                    alt="Group of pandas eating bamboo"
                />
            </div>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }, index) =>
                <div>
                    <h3
                        css={css`
                        margin-bottom: $(rhythm(1 / 4));
                    `}
                    >
                        {node.frontmatter.title}{" "}
                        <span
                            css={css`
                            color: #bbb;
                        `}
                        >
                            - {node.frontmatter.date}
                        </span>
                    </h3>
                    <p>{node.excerpt}</p>
                </div>
            )}
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
        totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "dd DD MMMM (YYYY)")
            title
          }
        }
      }
    }
  }
`