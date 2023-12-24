import React, { useState } from 'react'
import ResultCart from "./ResultCart"

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([])
    
    const onChange = (e) =>{
        setQuery(e.target.value)
    
    const key ="502048e978cb2d1dea0858de219ef98f"

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then((res)=> res.json())
    .then((data) => {
        if(!data.errors){
            setResults(data.results)
        }else{
            setResults([])
        }
    });
}

  return (
    <div className='add-page'>
        <div className='container'>
            <div className='add-content'>
                <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/pQvqGK6KQDILL7SJrhMQsRvJfLB.jpg" />
                <div className='titles'>
                        <h1>Hoşgeldiniz</h1>
                        <h2>Milyonlarca film, Tv şovu ve keşfedilecek kişi</h2>
                </div>
                <div className="input-wrapper">
                    <input value={query} onChange={onChange} type="text" placeholder='Film, Dizi ve Kişi Ara' />
                </div>
               {results.length > 0 && (
                <ul className='results'>
                     {results.map((movie)=>(
                        <li key={movie.id}>
                            <ResultCart movie={movie}/>
                        </li>
                ))}
                </ul>
               )}
            </div>
        </div>
    </div>
  )
}

export default Add