import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [countries, setCountries] = useState([])

  async function fetchCountries() {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()
    setCountries(data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <>
      <h1>Countries of the world</h1>
      {countries.map(country => (
        <Card key={country.cca2} country={country} />
      ))}
    </>
  )
}

export default App
