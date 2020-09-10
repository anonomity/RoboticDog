import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Template = ({data}) => {
    const title = data.mdx.frontmatter.title
    // const html = data.allMdx.html
    return (
        <Layout>
            <h1>{title}</h1>
            {/* <div
            dangerouslySetInnerHTML={{__html: html}}
            /> */}
        </Layout>
    )
}

export const query = graphql`
    query($pathSlug: String!) {
        mdx(frontmatter: {path : {eq: $pathSlug}}){
            # html
            frontmatter {
                title
            }
        }
    }
`

export default Template