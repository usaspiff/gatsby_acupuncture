import React from 'react'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const post = data.markdownRemark

  return <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h2>{post.frontmatter.title}</h2>
      <h4>
        <i>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </i>
      </h4>
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
}

export const postQuery = graphql`
         query BlogPostByPath($path: String!) {
           markdownRemark(frontmatter: { path: { eq: $path } }) {
             html
             frontmatter {
               path
               title
               author
               date(formatString: "MMMM DD, YYYY")
             }
           }
         }
       `
