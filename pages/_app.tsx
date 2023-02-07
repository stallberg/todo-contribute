export default function App({ Component, pageProps }) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Component {...pageProps} />;
    </>
  );
}
