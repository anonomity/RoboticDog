import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import "./posts.scss"

const Template = ({data}) => {
    const title = data.mdx.frontmatter.title
    const body = data.mdx.body
    return (
        <Layout>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
            {/* <div>
                {body}
            </div> */}
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