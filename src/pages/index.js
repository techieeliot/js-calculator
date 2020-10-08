import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Calculator from "../components/calculator"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Calculator"
      description="A Calculator created by Eliot Sanford created as one of five projects for the freeCodeCamp Front-End Library Certification."
      lang="en"
      meta=""
      // keywords="Calculator, calc, caculators, calculator, calcalator, Eliot, Eliot Sanford, Eliot Stanford, Elliott, Elliot, Stanford, Sanford, Sandford, Eliot Sandford, projects, freeCodeCamp, freccodecamp, Code Camp, Free Code Camp, Reactjs, React, Front-End, Frontend, Library, Certification"
    />
    <h1>Hi people</h1>
    <p>Welcome to my Calculator</p>
    <section style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: `0 1rem` }}>
      <Calculator />
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
