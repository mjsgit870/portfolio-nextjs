import Document, { Html, Head, Main, NextScript, Link } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="primary text-gray-300 font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
