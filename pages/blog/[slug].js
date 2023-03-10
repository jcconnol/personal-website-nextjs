import React from "react"
import Link from "next/link"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import markdownToHtml from "../../lib/markdown"
import { getPostBySlug, getAllPosts } from "../../lib/blog"
import styles from "../../styles/blog-post.module.css"
import Header from "../../components/header"
import Footer from "../../components/footer"

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      ...post,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

const BlogPost = post => {
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Header title="blog" />
      <div className={`${styles["page-content"]} ${styles["blog-content"]} ${styles.fadeIn}`}>
        <article
          className={styles["blog-post"]}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.content }}
            itemProp="articleBody"
          />
        </article>
        <Footer />
      </div>
    </Layout>
  )
}

export default BlogPost