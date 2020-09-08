import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Lessons</h1>
    <p>Here are a list of our lessons</p>
    <ol>
      <h3>September</h3>
      <li>Lesson 1</li>
      <li>Lesson 2</li>
      <li>Lesson 3</li>
      <h3>October</h3>
      <li>Lesson 4</li>
      <li>Lesson 5</li>
      <li>Lesson 6</li>
      <li>Lesson 7</li>
  
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
