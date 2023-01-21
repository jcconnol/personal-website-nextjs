// import React from "react"
// import Link from 'next/link'

// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import Header from "../components/header"
// import Footer from "../components/footer"
// import styles from "../styles/blog.module.css"

// const Blog = () => {

//   const posts = []

//   if (posts.length === 0) {
//     return (
//       <Layout>
//         <Header title={"blog"}/>
//         <div className={styles["page-content"]}>
//           <Seo title="All posts" />
//           <p>
//             No blog posts found. Add markdown posts to "content/blog" (or the
//             directory you specified for the "gatsby-source-filesystem" plugin in
//             gatsby-config.js).
//           </p>
//         </div>
//       </Layout>
//     )
//   }

//   return (
//     <Layout>
//       <Header title="blog"/>
//       <div className={styles["page-content"]}>
//         <Seo title="All posts" />
//         <h1>Posts</h1>
//         <ol style={{ listStyle: `none` }}>
//           {posts.map(post => {
//             const title = post.frontmatter.title || post.fields.slug

//             return (
//               <li key={post.fields.slug}>
//                 <article
//                   className={styles["post-list-item"]}
//                   itemScope
//                   itemType="http://schema.org/Article"
//                 >
//                   <header>
//                     <h2>
//                       <Link to={post.fields.slug} href={post.fields.slug} itemProp="url">
//                         <span itemProp="headline">{title}</span>
//                       </Link>
//                     </h2>
//                     <small>{post.frontmatter.date}</small>
//                   </header>
//                   <section>
//                     <p
//                       dangerouslySetInnerHTML={{
//                         __html: post.frontmatter.description || post.excerpt,
//                       }}
//                       itemProp="description"
//                     />
//                   </section>
//                 </article>
//               </li>
//             )
//           })}
//         </ol>
//         <Footer />
//       </div>
//     </Layout>
//   )
// }

// export default Blog;




import React from "react"
import Link from "next/link"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getAllPosts } from "../lib/blog"

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

const BlogIndex = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title="All posts" />
        {/* <Bio /> */}
        <p>No blog posts found. Add markdown posts to "content/blog".</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="All posts" />
      {/* <Bio /> */}
      {posts.map(post => {
        const title = post.frontmatter.title || post.slug
        return (
          <article
            key={post.slug}
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2>
                <Link href={post.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>
              <small>{post.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex