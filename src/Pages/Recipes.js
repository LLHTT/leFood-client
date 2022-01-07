import { useState, useEffect } from "react"
import "../style/Recipes.css"
import Axios from "axios"
import { v4 as uuidv4 } from "uuid"
import Recipe from "../components/Recipe"
import Alert from "../components/Alert"

export default function Recipes() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [alert, setAlert] = useState(false)

  const APP_ID = "5b1b4741"
  const APP_KEY = "0325f7a61ac15027151b8060740d90f0"
  // const LIMIT = 5

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  // const url2 = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&limit=${LIMIT}`
  

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url)
      if (!result.data.more) {
        return setAlert("No food with such name")
      }
      console.log(result)
      setRecipes(result.data.hits)
      setQuery("")
      setAlert(false)
    } else {
      setAlert("Please fill the form")
    }
  }

  useEffect(async () => {
    if (query !== "") {
      const result = await Axios.get(url)
      console.log(result)
      setRecipes(result.data.hits)
      setAlert(false)
    }
  }, [query])

  const onChange = async e => {
    setQuery(e.target.value)
  }

  // const onChange = async e => {
  //   setQuery(e.target.value)
  //   if (query !== "") {
  //     const result = await Axios.get(url)
  //     console.log(result)
  //     setRecipes(result.data.hits)
  //   }
  // }

  const onSubmit = e => {
    e.preventDefault()
    getData()
  };

  const clearInput = () => {
    setRecipes([])
    setQuery("")
  }

  return (
    <div className="recipes">
      <div className="search-box">
        <h1>Your Recipe App</h1>

        <form onSubmit={onSubmit} className="search-form">
          {alert && <Alert alert={alert} />}
          <input
            type="text"
            name="query"
            onChange={onChange}
            value={query}
            placeholder="Search Food"
          />
          {query.length !== 0 && 
            <div className="close-icon" onClick={clearInput}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
            </div>
          }
          <input type="submit" value="Search" />
        </form>
        
        {query.length !== 0 && 
          <div className="search-result">
            {recipes.slice(0, 5).map((val) => {
              return (
                <a className="search-item" href={val.recipe.url} target="_blank" rel="noopener noreferrer">
                  <p>{val.recipe.label}</p>
                </a>
              ) 
            })}
          </div>
        }
      </div>

      <div className="recipes-card">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  )
}
