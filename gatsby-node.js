const path = require('path');
// TODO: async graphql 
exports.createPages = (({graphql, actions}) => {
    const { createPage } = actions

    return new Promise((resolve, reject) =>  {
        const blogPostTemplate = path.resolve('src/templates/blogPost.js')

        resolve(
            graphql(
                `query{
                    allMdx{
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
            ).then(result => {
                result.data.allMdx.edges.forEach(({node}) => {
                    const path = node.frontmatter.path
                    createPage({
                        path, 
                        component: blogPostTemplate,
                        context: {
                            pathSlug: path
                        }
                    })
                })
            })
        )
    })
})