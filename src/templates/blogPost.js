import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import "./posts.scss"

const Template = ({ data }) => {
    const title = data.mdx.frontmatter.title
    const body = data.mdx.body
    return (
        <Layout >
            <div style={{ backgroundColor: '#ccc', left: 0, position: 'relative', top: 0, height: '100px' }}>
                <h1 style={{ textAlign: 'center', paddingTop: '30px' }}>{title}</h1>

            </div>
      

                <MDXRenderer>

                    {body}
                </MDXRenderer>
           

        </Layout>
    )
}

export const query = graphql`
    query($pathSlug: String!) {
        mdx(frontmatter: {path : {eq: $pathSlug}}){
            body
            frontmatter {
                title
            }
        }
    }
`

export default Template