import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from "@/components/Navbar" //don't have to define relative imports because we've defined the top level as an @

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* page layout that affects all urls goes here */}
      <Navbar />
      <body>
        <Main />
        <NextScript />
      </body>
      <footer>FOOTER PLACEHOLDER</footer>
    </Html>
  )
}
