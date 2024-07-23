import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <body className="h-screen w-screen bg-very_dark_blue flex justify-center items-center">
        <NextScript />
      </body>
    </Html>
  );
}
