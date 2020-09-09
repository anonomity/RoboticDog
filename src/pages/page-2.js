import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lessons from "../components/lessons"

const SecondPage = ({data}) => (
  
  <Layout>
    <SEO title="Lessons" />
    <div style={{position: 'relative', left: 0,marginBottom: '50px'}}>
   
    </div>
    <Lessons data={data}/>
    
  </Layout>
)

export const query = graphql`
query LessonQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    )
    {
      edges{
        node{
          frontmatter{
            title,
            path
          }
        }
      }
    }
  }

`
export default SecondPage
