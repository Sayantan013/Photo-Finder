import React, {useState} from 'react';
import Unsplash, {toJson} from "unsplash-js";


const unsplash = new Unsplash({
  accessKey: "SCSF8oLmEMWNYH3ytdeQMTWwhRZbUR9vFufSXJghDc8"
})

function SearchPhoto() {
  const [query,setQuery] =  useState("");
  const[pics, setPics] = useState([]);//default value is empty array not string because of map function


  
  const searchP = async(e) => {
    e.preventDefault();
    //console.log("submitting request")
    unsplash.search.photos(query)
    .then(toJson)
    .then((json) => {
      console.log(json.results)
      setPics(json.results)
    });



  };

  return (
    <div>
      <form className='form' onSubmit={searchP}>
        <label htmlFor="query" className='label'>
          {" "}
        </label>
        <input type="text" placeholder={'Try "Landscape" or "Tokyo"'} name='query' className='input' 
        value={query} onChange={(e) => setQuery(e.target.value)} />

        
        <button className="button" type='submit'>Search</button>
      </form>

      <div className="card-list">
          {pics.map((pic) => <div className="card" key={pic.id}>
              <img src={pic.urls.full} alt= {pic.alt_description}
              className="card-img" 
              width="50%"
              height="50%"/>
          </div>
          )}
      </div>
    </div>
  )
}

export default SearchPhoto