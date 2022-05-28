import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro/intro"
import About from "../components/about/about"
import Products from "../components/products/products"
import Forkids from "../components/forkids/forkids"
import Author from "../components/author/author"
import Contacts from "../components/contacts/contacts"
import Advantage from "../components/advantage/advantage"

import { productsData } from "../data/ProductsData"
import { kidsData } from "../data/kidsData"

import "../components/style.scss"




const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Intro />
    <About />
    <Products data={productsData} />
    <Advantage />
    <Forkids />
    <Products data={kidsData} />
    <Author />
    <Contacts />
  </Layout>
)

export default IndexPage