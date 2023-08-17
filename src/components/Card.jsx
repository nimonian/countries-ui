function Card({ country }) {
  return (
    <div className='card'>
      <h2>{country.name.common}</h2>
      <img className='flag' src={country.flags.png} />
    </div>
  )
}

export default Card
