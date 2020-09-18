import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lessons from "../components/lessons"

const SecondPage = ({ data }) => (

  <Layout>
    <SEO title="Home" />
    <div style={{ position: 'relative', left: 0, marginBottom: '50px' }}>

    </div>
    <Lessons data={data} />

  </Layout>
)

export const query = graphql`
query LessonQuery {
  allMdx{
     	edges{
        node{
          frontmatter{
            title
            path
            date
            exerpt
          }
        }
      }
      
    }
  }

`
export default SecondPage
