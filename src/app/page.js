"use client"
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import CountryComponent from './components/country_component'

export default function Home() {
  // data vacía
  const [data, setData] = useState([])
  const [pais, setPais] = useState('')
  const [capital, setCapital] = useState('')

  const baseUrl = 'http://localhost:8080/'

  const getData = async() => {
      const res = await fetch(baseUrl + 'api/countries', {method: 'GET'})
      const data_res = await res.json()
      setData(data_res)
  }
  const handlerSubmit = async() => {
    if (pais.length < 1 && capital.length < 1) {
      alert('Ingresa un país y una capital')}
      else { 
    const countryInfo = {nombre:pais, capital}
    const res = await fetch(baseUrl + 'api/countries', {method: 'POST', body: JSON.stringify(countryInfo) , headers: {'Content-Type': 'application/json'} })
    const data_res = await res.json()
    console.log(data_res)
    getData()
  }
}

  useEffect(() => {
    getData()
  },[])

  return (
    <main className={styles.main}>
      <div>
        <br/>
      </div>
      <div className='formContainer'>
        <label htmlFor="post-pais">Ingresa el país</label>
        <br/>
        <input id="post-pais" type="text" placeholder="Ingresa el nombre del país" pattern="^[A-Za-zÁ-ú\s'-]+$" title="Ingrese un nombre válido con letras y tildes" value={pais} onChange={(e) => setPais(e.target.value)} required></input>
        <br/>
        <label htmlFor="post-capital">Ingresa la capital</label>
        <br/>
        <input id="post-capital" type="text" placeholder="Ingresa el nombre de la capital" pattern="^[A-Za-zÁ-ú\s'-]+$" title="Ingrese un nombre válido con letras y tildes" value={capital} onChange={(e) => setCapital(e.target.value)} required></input>
        <br/>
        <button className='btnSubmit' id="submit" onClick={handlerSubmit}>Añadir</button>
        <br/>
      </div>
      <div>
        <h2>Lista de Países</h2>
        <div className='displayCountries'>
          <ul className='lista'>
            <li>{data && data.map((country, index) => <CountryComponent key = {index} country = {country} getData = {getData}/>)}</li>
          </ul>
        </div>
      </div>
      <br/>
    </main>
  )
}
