// Wraps the whole Gatsby element
import React from "react"
import { MDXProvider } from "@mdx-js/react"

import Activity from "./src/components/ui/activity";

const MyH2 = (props) => <Activity {...props}/>


const components = {
    h2: MyH2
  }

export const wrapRootElement =({ element }) => {
    return (
        <MDXProvider components={components}>{element}</MDXProvider>
    )
}
