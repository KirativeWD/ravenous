import React from 'react'
import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <>
      <main>
        <section className="hero">
          <header>
            <h1 className="flex">Feeling...<span>Ravenous?</span></h1>
            <h2>Your Next Meal Awaits</h2>
          </header>
          <SearchBar />
        </section>
        <BusinessList />
      </main>
    </>
  )
}

export default App
