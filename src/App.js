import React from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import Launchpads from './components/Launchpads'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorHandle'

const App = () => {
    return (
        <>
            <Navbar/>
            <Page />
            <ErrorBoundary>
                <Launchpads />
            </ErrorBoundary>
            <Footer />
        </>
    )
}

export default App;
