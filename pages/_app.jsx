const App = ({ Component, pageProps }) => {
    return <>
    <p>I'm a header</p>
        <Component {...pageProps} />
    </>
}

export default App;