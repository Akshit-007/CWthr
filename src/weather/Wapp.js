import React, { useEffect, useState } from 'react'
// import List from './List'
import './wstyle.css'

function Wapp() {

    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
    
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ebee5f5b224d080985d3980f3a00ba2a`
            const response = await fetch(url);
            const resJson = await response.json();
           
          console.log(city)
            console.log(resJson)
            setCity(resJson.main);
        }

        fetchApi();
    }, [search])







    return (
        <div>

            <div className="box">
                <p>Enter city</p>
                <i className="fa fa-search" aria-hidden="true" id="icon"></i> <input type="text" placeholder="City" onChange={e => { setSearch(e.target.value) }} />
            </div>
            
            {!city ? (<div className="error"><p>No data found !</p></div>) : (

               
                < div className="data">
            <h1 className="name"> {search} </h1>
            <hr></hr>

            <p><span className="temp">{city.temp} &#8451; </span>     <i className='fas fa-smog' id="icon_1" ></i></p>
            <p className="tempvar">Min.temp= {city.temp_min} &#8451; | Max.temp={city.temp_max}</p>

        </div>
    )
}

        </div >
    )
}

export default Wapp
