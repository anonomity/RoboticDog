import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lessons from "../components/lessons"

const SecondPage = ({data}) => (
  
  <Layout>
    <SEO title="Lessons" />
    <Lessons data={data}/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
query LessonQuery {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            path
          }
        }
      }
    }
  }

`
export default SecondPage
