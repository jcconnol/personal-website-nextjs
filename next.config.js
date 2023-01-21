/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


//MDX blog method
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// })

// module.exports = withMDX({
//   pageExtensions: ['mdx'],
// })

// export default {
//   title: `John Connolly Website and Blog`,
//   author: {
//     name: `John Connolly`,
//     summary: `A creator, engineer, automator.`,
//   },
//   description: `Website, portfolio and blog of John Connolly`,
//   social: {
//     twitter: `johncconnolly`,
//   },
// }