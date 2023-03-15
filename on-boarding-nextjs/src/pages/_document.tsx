import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          src="https://kit.fontawesome.com/9fd79d7cba.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      <Head />
      </head>
      <body className="bg-[#F7F7F9]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
