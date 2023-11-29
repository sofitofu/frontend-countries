import { useState } from "react";
export default function CountryComponent({country, getData}) {    

    const baseUrl = 'http://localhost:8080/';

    const handlerRemove = async () => {
        const respuesta = window.confirm("¿Estás seguro de que quieres eliminar el país " + country.nombre + " y su capital " + country.capital + "?");
        if (respuesta) {
        const res = await fetch(baseUrl + `api/countries/${country.id}`, {method: 'DELETE'})
        getData()
        }
        else {
            console.log("El usuario hizo clic en Cancelar");
        }
    }

    const CountryID = country.id;

    return (
        <div className="test">
        <div>
        <p className="id-country" style={{ display: 'inline-block' }}>Id del país : </p>
        <span style={{ display: 'inline-block', marginLeft: '5px' }}>{country.id}</span>
        <br/>
            </div>
            <div>
                {country.name}
                {country.capital}
            <br/>
            <button onClick={handlerRemove}>Eliminar</button>
            </div>
            <br/>
            <hr/> 
        </div>
    )
}

