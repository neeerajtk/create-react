function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
 
  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
  
    return (
        <Container>
            <p>Allooo</p>
            <Component { ...appProps } />
        </Container>
  )}
  
  export default MyApp