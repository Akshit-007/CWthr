import React, { useEffect, useState } from 'react'





function Wpp()
{
    const [city, setCity] = useState(null);
    const [search, setSearch]=useState(null)

useEffect(()=>{
       fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ebee5f5b224d080985d3980f3a00ba2a`)
          .then(response=>response.json())
          .then(data=>setCity(data))
          
},[search])


    return(
        <div>
             <input type="text" onChange={e=>{setSearch(e.target.value)}}></input>
             {!city ?(<p>Error</p> ):(<div><h1>{city.name}</h1><h2></h2></div> )}
        </div>
    )
}

export default Wpp