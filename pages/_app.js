import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
   <Component {...pageProps}>
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
        h1 {
          padding-bottom: 1.5rem;
        }
        
        h2 {
            padding-top: 5%;
            font-size: 2.5rem;
        }
        
        h3 {
            margin-bottom: 2rem;
        }
        
        p {
            font-size: 1.2rem;
        }
        
        ol {
          font-size: 1.2rem;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          box-sizing: border-box;
          background: #fff;
          border: none;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        @media (prefers-color-scheme: dark) {
          html {
            color-scheme: dark;
          }
          body {
            color: white;
            background: black;
          }
        }

        a {
          color:darkblue;
        }
      `}</style>
    </Component>
  )
}

export default MyApp
