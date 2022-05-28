import * as React from "react"

import Helmet from "react-helmet"
import Header from "./header/header"

const Layout = ({ children }) => {
  return (
    <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
    </Helmet>
    <Header />
    <main>{children}</main>  
    </>
  )
}

export default Layout
