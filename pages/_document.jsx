import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Fastest and most secure VPN service with military-grade encryption" />
        <meta name="keywords" content="VPN, security, privacy, encryption, internet security" />
        <meta property="og:title" content="VPLeo-Shop - Secure Your Digital Life" />
        <meta property="og:description" content="Lightning-fast, private, and secure internet access" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}