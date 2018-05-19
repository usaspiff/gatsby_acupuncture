import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h2>
      <u>Latest Posts</u>
    </h2>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <p>
          {post.node.excerpt}
          <Link to={post.node.frontmatter.path}>&#160;Read More.</Link>
        </p>
        <br />
        <hr />
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
         query BlogIndexQuery {
           allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
             edges {
               node {
                 id
                 excerpt(pruneLength: 250)
                 frontmatter {
                   path
                   title
                   date(formatString: "MMMM DD, YYYY")
                   author
                 }
               }
             }
           }
         }
       `

export default BlogPage
