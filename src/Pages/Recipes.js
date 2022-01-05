import { useState } from "react"
import "../style/Recipes.css"
import Axios from "axios"
import { v4 as uuidv4 } from "uuid"
import Recipe from "../components/Recipe"
import Alert from "../components/Alert"

export default function Recipes() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [alert, setAlert] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const APP_ID = "5b1b4741"
  const APP_KEY = "0325f7a61ac15027151b8060740d90f0"
  const LIMIT = 5

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  const url2 = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&limit=${LIMIT}`
  

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url2)
      if (!result.data.more) {
        return setAlert("No food with such name")
      }
      console.log(result)
      setRecipes(result.data.hits)
      setQuery("")
      setAlert("")
    } else {
      setAlert("Please fill the form")
    }
  }

  // const onChange = e => setQuery(e.target.value);

  const onChange = async e => {
    setQuery(e.target.value)
    if (query !== "") {
      const result = await Axios.get(url2)
      console.log(result)
      setRecipes(result.data.hits)
    }
  }
  
  // const onChange = async e => {
  //   setQuery(e.target.value);
  //   if (query !== "") {
  //     const result = await Axios.get(url2);
  //     console.log(result);
  //     setSuggestions(result.data.hits.label);
  //   }
  // }

  const onSubmit = e => {
    e.preventDefault()
    getData()
  };

  return (
    <div className="recipes">
      <h1>Our Recipe App</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="AutoComplete"
          placeholder="Search Food"
        />
        {/* <datalist>
          {suggestions.map(result => 
            {
              return (
                <option>{suggestions}</option>
              )
            }  
          )}
        </datalist> */}
        <input type="submit" value="Search" />
      </form>
        <div className="recipes-card">
          {recipes !== [] &&
            recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
    </div>
  )
}
