import React from "react"
import Link from "next/link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getAllPosts } from "../lib/blog"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from "../styles/blog.module.css"

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
        <p>No blog posts found. Add markdown posts to &ldquo;content/blog.&ldquo;</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="All posts" />
      <Header title="blog" />
      <div className={`${styles["page-content"]} ${styles["blog-content"]} ${styles.fadeIn}`}>
        <h1>
          <b>Blog Posts</b>
        </h1>
        {posts.map((post, index) => {
          const title = post.frontmatter.title || post.slug
          return (
            <div className={styles["page-content"]} key={index}>
              <article
                key={"blog/" + post.slug}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2 className={styles["blog-post-header"]}>
                    <Link href={"blog/" + post.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    className={styles["blog-post-description"]}
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </div>
          )
        })}
        <Footer />
      </div>
    </Layout>
  )
}

export default BlogIndex