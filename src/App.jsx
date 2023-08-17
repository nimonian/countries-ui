import { useState, useEffect } from 'react'
import './App.css'

// the Card component is a child component which displays a single country
import Card from './components/Card'

function App() {
  // create a piece of state called "countries" - it is initially an empty array
  // also create a setter function which can change the value of "countries"
  const [countries, setCountries] = useState([])

  // this function will fetch the data from the api and then update the "countries" state
  async function fetchCountries() {
    // 1. get the api response using fetch
    const res = await fetch('https://restcountries.com/v3.1/all')
    // 2. parse the json out of the response - this is an array of countries
    const data = await res.json()
    // 3. use the setter to change the empty countries array to the array of countries
    setCountries(data)
  }

  // the useEffect will run when, and only when, the component loads
  useEffect(() => {
    // all it does is calls the fetchCountries function
    fetchCountries()
  }, [])

  // in the returned jsx, you can see that we are looping through the "countries" array
  // and passing each "country" in the array into a <Card /> element
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
