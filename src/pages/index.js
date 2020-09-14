import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({data}) => {

  const {allStrapiProjects: {nodes: projects}} = data;
  const {allStrapiBlogs: {nodes: blogs}} = data;
  return (
    <Layout children="index">
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="feature projects" showLink/>
      <Blogs blogs={blogs} title="Latest blogs" showLink/>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        github
        description
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack:item {
          id
          title
        }
      }
    }

    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        id
        slug
        title
        category
        description
        date(formatString: "MMMM, DD, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

