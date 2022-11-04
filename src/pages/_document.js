import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Head>
        
        <body style={{overflowX:'hidden'}}>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          {/* <script>
           AOS.init();
           </script>   */}
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
