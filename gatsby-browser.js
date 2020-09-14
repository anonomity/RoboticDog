// Wraps the whole Gatsby element
import React from "react"
import { MDXProvider } from "@mdx-js/react"

import Activity from "./src/components/ui/activity";

const MyH3 = (props) => <Activity {...props}/>


const components = {
    h3: MyH3
  }

export const wrapRootElement =({ element }) => {
    return (
        <MDXProvider components={components}>{element}</MDXProvider>
    )
}
