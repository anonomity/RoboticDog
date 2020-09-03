import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Woof!</h1>
    <p>Welcome to RoboticDog</p>
    <p>Are you ready to explore the world of programming?</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
       <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
